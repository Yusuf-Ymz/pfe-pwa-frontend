import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from './services/authentification.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pfe-pwa-frontend';
  firebase_token: string;

  
  constructor(private authentificationService: AuthentificationService, private toastr: ToastrService, private afMessaging: AngularFireMessaging) { }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  authenticate() {
    if (localStorage.getItem("token") === null) {
      this.authentificationService.authenticate(this.firebase_token)
    }
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message:any) => {
        this.toastr.warning(message.notification.body,message.notification.title);
      }
      );
  }

  requestPermission(): void {
     this.afMessaging.requestToken
      .subscribe((token) => {
        this.firebase_token = token;
        if(token !== null)
          this.authenticate();
        else
          this.toastr.warning("Activez les notifications pour pouvoir utiliser l'appli")
      },
        (error) => { console.error(error); },
      );
  }
}