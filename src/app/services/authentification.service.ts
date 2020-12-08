import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    //TODO check content to send, device token(firebase) ?
    authenticate() {
        this.http.post<any>(environment.serverUrl + 'citizens', {})
            .subscribe((response) => { localStorage.setItem('token', response.token); this.toastr.success("Vous avez été enregistré") }),
            (error: HttpErrorResponse) => {
                this.toastr.error("Une erreur est survenu lors de l'enregistrement")
            }
    }
}
