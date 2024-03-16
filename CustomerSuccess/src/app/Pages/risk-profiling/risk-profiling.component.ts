import { Component, ElementRef, ViewChild } from '@angular/core';
import { RiskService } from '../../services/risk.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-risk-profiling',
  templateUrl: './risk-profiling.component.html',
  styleUrl: './risk-profiling.component.css',
})
export class RiskProfilingComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private risk: RiskService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.risk.getRisk().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }
  availableIds: [] | any;
  getId() {
    this.project.getProject().subscribe((response: any) => {
      this.availableIds = response.items;
      console.log(this.availableIds);
    });
  }

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('RiskProfile.pdf');
      },
    });
  }

  projects: [] | any;
  formData: any = {
    projectId: '',
    riskType: '',
    severity: '',
    impact: '',
  };

  delete(id: string) {
    this.risk.deleteRisk(id).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.risk.updateRisk(id, this.formData).subscribe(
      () => {
        this.loadAuditRecords(); // Reload audit records after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
        // Optionally, handle the error gracefully and provide user feedback
      }
    );
  }

  onSubmit() {
    this.risk.createRisk(this.formData).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
