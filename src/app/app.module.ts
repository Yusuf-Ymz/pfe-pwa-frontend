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

@NgModule({
  declarations: [
    NavbarComponent,
    ScannerComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    MaterialModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
