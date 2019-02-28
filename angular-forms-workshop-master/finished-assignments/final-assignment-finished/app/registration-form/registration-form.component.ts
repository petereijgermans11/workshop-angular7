import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiResponse } from './address.model';
import { RegistrationFormService } from './registration-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [RegistrationFormService]
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationFormService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      // make all required with the postcode having the postcode pattern
      postcode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i)]],
      houseNumber: ['', Validators.required],
      // these three formfields will be filled dynamically. Disabled in HTML
      street: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required]
    });

    this.watchValueChanges();
  }

  public submitForm() {
    // if form is submitted and if its valid, continue to /confirmation
    // see app.routing.module.ts for router-specification
    if(this.registrationForm.valid) {
      this.router.navigate(["/confirmation"]);
    } else {
      alert("Form is not yet valid");
    }
  }

  private watchValueChanges(): void {
    this.registrationForm.get('postcode').valueChanges.subscribe((e) => {
      // this is called every time the 'postcode' value is changed
      this.updateFieldsIfValid();
    });

    this.registrationForm.get('houseNumber').valueChanges.subscribe(e => {
      this.updateFieldsIfValid();
    });
  }

  private updateFieldsIfValid() {
    // retrieve the controls of the form for easy access
    const houseNumberControl = this.registrationForm.get('houseNumber');
    const postcodeControl = this.registrationForm.get('postcode');

    // if both housenumber and postcode are valid and not empty, we call the Postcode API
    if(this.isValidAndNotEmpty(houseNumberControl) && this.isValidAndNotEmpty(postcodeControl)) {
      const response = this.registrationService.getAddress(postcodeControl.value, houseNumberControl.value);
      
      // update the street, city and province fields with the API response
      this.updateFields(response);
    }
  }

  private isValidAndNotEmpty(control: AbstractControl): boolean {
    const notEmpty = control.value != "" && control.value != null;
    // dirty means: interacted with by the user
    const valid = control.dirty && control.valid;
    
    return valid && notEmpty;
  }

  private updateFields(apiResponse: Observable<ApiResponse>): void {
    // retrieve the ApiResponse from the Observable, see api-response.model.ts for implementation
    apiResponse.subscribe((response: ApiResponse) => {
      // perform a null check in case the api call yielded no results
      if(response.details == null){
        console.log("No results found.");
        return;
      }
      // patch the form values. Note: is we used .setValue, we have to provide ALL form field values
      this.registrationForm.patchValue({'street': response.details[0].street});
      this.registrationForm.patchValue({'city': response.details[0].city});
      this.registrationForm.patchValue({'province': response.details[0].province});
    });
  }
}
