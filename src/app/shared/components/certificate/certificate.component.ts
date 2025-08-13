import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CertificateService} from '../../services/certificate.service';

@Component({
  selector: 'certificate',
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent implements OnInit, AfterViewInit {
  twoColored:boolean|undefined;
  @ViewChild('certificate') certificate!:ElementRef;
  constructor(private certificateService:CertificateService) {}
  ngOnInit() {
    this.twoColored = this.certificateService.twoColoredBg();
  }
  ngAfterViewInit() {
    if(this.twoColored) {
      this.certificate.nativeElement.classList.add('two-colored-bg');
    } else {
      this.certificate.nativeElement.classList.remove('two-colored-bg');
    }
  }
}
