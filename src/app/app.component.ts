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
  
  // this.afMessaging.onMessage((payload) => { //affiche le message des qu'il le reçoit
  //   console.log(payload);
  // });
  
  listen() {
    this.afMessaging.messages
      .subscribe((message) => { 
        console.log(message); 
        this.toastr.info(JSON.stringify(message));
      }
    );
  }
  
  ngOnInit(): void {
    this.requestPermission();
    setTimeout(() => {
      if (localStorage.getItem("token") === null) {
        this.authentificationService.authenticate(this.firebase_token);
      }
    }, 2000);
    this.listen();
  }

  requestPermission(): void {
    this.afMessaging.requestToken
      .subscribe((token) => { 
        console.log('Permission granted! Save to the server!', token); 
        this.firebase_token = token;
      },
        (error) => { console.error(error); },  
      );
  }
}