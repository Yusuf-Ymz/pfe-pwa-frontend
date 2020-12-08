import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Injectable, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ScannerService } from '../../services/scanner.service';

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

  constructor(private scannerService: ScannerService) {

  }

  onCodeResult(qrString: string) {
    if (qrString.includes("type")) {
      const qrDoctor = JSON.parse(qrString);
      this.scannerService.scanDoctor(qrDoctor);
    }
    else {
      this.scannerService.scanLocation(qrString);
    }
    this.activated = false;
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
