import { ViewChild } from '@angular/core';
import { Injectable, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ScannerComponent {
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  activated: boolean = false;

  qrResultString: string;

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
