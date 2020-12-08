import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pfe-pwa-frontend';

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    //TODO modify localStorage by something else for service workers
    if (localStorage.getItem("token") === null) {
      this.authentificationService.authenticate();
    }
  }

}
