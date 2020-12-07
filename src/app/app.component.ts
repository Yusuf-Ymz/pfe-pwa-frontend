import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  title = 'pfe-pwa-frontend';

  activated: boolean = false;

  qrResultString: string;

	// Force redirect HTTP to HTTPS when in production mode
	OnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.activated = false;
    this.qrResultString = resultString;
    this.scanner.enable = false;
  }

  activate() {
    this.activated = true;
  }

  deactivate() {
    this.activated = false;
    this.scanner.enable = false;
  }
}
