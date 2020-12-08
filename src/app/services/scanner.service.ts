import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ScannerService {
    private token: string;
    private headers: HttpHeaders;
    private options: Object;

    //TODO modify localStorage by something else for service workers
    constructor(private http: HttpClient, private toastr: ToastrService) { }

    scan() {
        this.token = localStorage.getItem("token");
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.token || ''
        });
        this.options = { headers: this.headers };
    }

    scanDoctor(qrCode: any) {
        this.scan();
        this.http.post(environment.serverUrl + 'citizens/scans/doctor', { "hash": qrCode.id }, this.options).toPromise()
            .then((response) => this.toastr.success("Scan réussi"))
            .catch(error => this.toastr.error("Ce QRCode a déjà été scanné"))
        
    }

    scanLocation(qrString: string) {
        this.scan()
        this.http.post(environment.serverUrl + 'citizens/scans/location', { "id": qrString }, this.options).toPromise()
            .then((response) => this.toastr.success("Scan réussi"))
            .catch(error => this.toastr.error("Échec du scan"))
    }

}
