export class ApiResponse {
    status: string;
    details: {
        street: string;
        municipality: string;
        city: string;
        province: string;
        postcode: string;
        pnum: string;
        pchar: string;
        rd_x: string;
        rd_y: string;
        lat: string;
        lon: string;
    }[];
}

/** This class is based on the response of the postcode API. Sample Response:
 
"status": "ok",
 "details": [
     {
         "street": "Lange Viestraat",
         "city": "Utrecht",
         "municipality": "Utrecht",
         "province": "Utrecht",
         "postcode": "3511 BK",
         "pnum": "3511",
         "pchar": "DD",
         "rd_x": "136381.04463888888888888889",
         "rd_y": "456146.25022222222222222222",
         "lat": "52.0932602586294",
         "lon": "5.1155114029753"
     }
 ]


 */
//"status":"ok","details":[{"street":"Drift","city":"Doorn","municipality":"Utrechtse Heuvelrug",
//"province":"Utrecht","postcode":"3941 DD","pnum":"3941","pchar":"DD","rd_x":"152006.85616000000000000000","rd_y":"450762.16236000000000000000",
//"lat":"52.0451725756620","lon":"5.3435757952082"}]}