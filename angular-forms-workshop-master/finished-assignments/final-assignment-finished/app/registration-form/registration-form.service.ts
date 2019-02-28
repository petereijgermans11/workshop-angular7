import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './address.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationFormService {

    constructor(private http: HttpClient) { }

    // Observable<any> type neccessary because we're adding a pipe which returns 'void'
    public getAddress(postcode: string, housenumber: string): Observable<ApiResponse> {
        // delete all spaces if present in the postcode
        postcode = postcode.replace(/\s/g, '');

        return this.http.get(this.interpolateUrl(postcode, housenumber)) as Observable<ApiResponse>;
    }

    private interpolateUrl(postcode: string, houseNumber: string): string {
        // create the postcode api url and interpolate with our data
        const url =  `http://api.postcodedata.nl/v1/postcode/?postcode=${postcode}&streetnumber=${houseNumber}&ref=domeinnaam.nl&type=json `;
        console.log(url);
        return url;
    }
}