import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Gender } from './customer.model';
import { addressesValidator } from './address.validator';

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormsComponent implements OnInit{
    // allows the usage of the Gender enum (see customer.model.ts) in the template
    Gender = Gender;
    
    // prefilled arary of skill levels
    skillLevels: string[] = ["Student", "Junior", "Medior", "Senior", "CodeSmith", "Champion"];

    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            username: ['', Validators.required],
            firstName: ['Default'],
            lastName: [''],
            phoneNumber: [''],
            email: [''],
            gender: [''],
            skillLevel: [''],
            addresses: this.formBuilder.array([
                this.formBuilder.group({        // since we have 2 formcontrols in a formarray, we need to use formGroup
                    line: ['', Validators.required],
                    country: ['', Validators.required]
                })
            ],addressesValidator
              )
        });
    }

    public addAddress(): void {
        // get the formarray, with explicit cast so we get access to the 'push' function
        let formArray = this.formGroup.get('addresses') as FormArray;
        // create a new formgroup with two formcontrols
        let newAddress = this.formBuilder.group({
            line: [''],
            country: ['']
        },
        

        );
        formArray.push(newAddress);
    }

    public deleteAddress(index: number): void {
        // explicit cast to FormArray so we have access to the 'removeAt' function
        let formArray = this.formGroup.get('addresses') as FormArray;
        formArray.removeAt(index);
    }

    onSubmit()  {
        console.log('Form  submitted:  ',  this.formGroup.value);
        //  TODO:  do  something  useful  with  form
        }
}
