import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuditService } from '../../services/audit.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrl: './audit-history.component.css',
})
export class AuditHistoryComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a3');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('AuditHistory.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private audit: AuditService) {}
  formData: any = {
    audit: '',
    reviewedBy: '',
    status: '',
    reviewedSection: '',
    comment: '',
    actionItem: '',
  };
  ngOnInit(): void {
    this.audit.getAudit().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.audit.deleteAudit(id).subscribe((response: any) => {
      null;
    });
  }

  edit(id: string) {
    this.audit.updateAudit(id, this.formData).subscribe(
      () => {
        console.log('Audit record updated successfully');
        // Optionally, perform any additional actions after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
        // Optionally, handle the error gracefully and provide user feedback
      }
    );
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.audit.createAudit(this.formData).subscribe();
  }
}
