import { AbstractControl } from '@angular/forms';

export const knownUsernames = ["bob", "gina", "lisa", "jan"];

export function uniqueUsername(control: AbstractControl): {[key: string]: any} {
    if(knownUsernames.indexOf(control.value) < 0) {
        return {'not-unique': control.value};
    }
    return null;
}