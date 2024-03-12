import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuditService } from '../../services/audit.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css'], // Use styleUrls instead of styleUrl
})
export class AuditHistoryComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private audit: AuditService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.audit.getAudit().subscribe((response: any) => {
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
    const pdf = new jsPDF('p', 'pt', 'a3');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('AuditHistory.pdf');
      },
    });
  }

  projects: [] | any;
  formData: any = {
    audit: '',
    reviewedBy: '',
    status: '',
    reviewedSection: '',
    comment: '',
    actionItem: '',
  };

  delete(id: string) {
    this.audit.deleteAudit(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.audit.updateAudit(id, this.formData).subscribe(
      () => {
        console.log('Audit record updated successfully');
        this.loadAuditRecords(); // Reload audit records after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
        // Optionally, handle the error gracefully and provide user feedback
      }
    );
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.audit.createAudit(this.formData).subscribe(() => {
      console.log('Audit record created successfully');
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
