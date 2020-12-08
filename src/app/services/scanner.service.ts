import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ScannerService {
    //TODO modify localStorage by something else for service workers
    constructor(private http: HttpClient) { }

    scanDoctor(qrCode: any) {
        console.log("doctor", qrCode.id)
        const token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token || ''
        });
        let options = { headers: headers };
        this.http.post(environment.serverUrl + 'citizens/scans/doctor', { "hash": qrCode.id }, options).toPromise()
            .then((response) => console.log("success"))
            .catch(error => console.log(error))
    }

    scanLocation(qrString: string) {
        const token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token || ''
        });
        let options = { headers: headers };
        this.http.post(environment.serverUrl + 'citizens/scans/location', { "id": qrString }, options).toPromise()
            .then((response) => console.log("success"))
            .catch(error => console.log(error.error.message))
    }

}
