import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScannerComponent } from './components/scanner/scanner.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingComponent } from './components/messaging/messaging.component';

var firebaseConfig = {
  apiKey: "AIzaSyBTuPxWP530fsNAhScPZvnLsELdCYO2rog",
  authDomain: "pfe-pwa-app.firebaseapp.com",
  projectId: "pfe-pwa-app",
  storageBucket: "pfe-pwa-app.appspot.com",
  messagingSenderId: "898186041708",
  appId: "1:898186041708:web:e2c2f2b782a3a51e673b49",
  measurementId: "G-PEFNQZ70KE"
};

@NgModule({
  declarations: [
    NavbarComponent,
    ScannerComponent,
    AppComponent,
    MessagingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    MaterialModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
