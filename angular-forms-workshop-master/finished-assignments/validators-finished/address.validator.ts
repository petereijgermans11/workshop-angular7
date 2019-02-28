import { AbstractControl, FormArray } from '@angular/forms';

export function addressesValidator(control: AbstractControl): {[key: string]: any} | null {
    // cast to FormArray so we can use the provided functions
    const formArray = control as FormArray;
    
    // length represents addresses here, if it is less than 2, the form is invalid
    if(formArray.length < 2) {
        return {'Wrong-length': formArray.length};
    }
    
    // nested loop looping through all addresses, checking if two of them have the same postcode
    // note: the .get() doesn't take a number, so we add '' before i so it is a string value
    for(let i = 0; i < formArray.length; i++) {
        const currentPostcode: string = formArray.get(''+i).get('postcode').value;
        for(let j = 0; j < formArray.length; j++) {
            if(currentPostcode === formArray.get(''+j).get('postcode').value) {
                return {'Double-postcode': currentPostcode};
            }
        }
    }
    
    // if the formarray is valid, we return no errormessage
    return null;
}
