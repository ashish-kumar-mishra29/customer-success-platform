import { Component, ElementRef, ViewChild } from '@angular/core';
import { RiskService } from '../../services/risk.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-risk-profiling',
  templateUrl: './risk-profiling.component.html',
  styleUrl: './risk-profiling.component.css',
})
export class RiskProfilingComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('VersionHistory.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private risk: RiskService) {}
  formData: any = {
    version: '',
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: '',
    approvalDate: '',
    approvedBy: '',
  };
  ngOnInit(): void {
    this.risk.getRisk().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.risk.deleteRisk(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.risk.createRisk(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }
}
