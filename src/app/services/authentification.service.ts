import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    constructor(private http: HttpClient) { }

    //TODO check content to send, device token(firebase) ?
    authenticate() {
        console.log("register")
        this.http.post<any>(environment.serverUrl + 'citizens', {})
            .subscribe((response) => { console.log(response); localStorage.setItem('token', response.token); }),
            (error: HttpErrorResponse) => {
                console.log(error.error.message)
            }
    }
}
