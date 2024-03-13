import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import { ClientFeedbackService } from '../../services/client-feedback.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.css',
})
export class ClientFeedbackComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private feedback: ClientFeedbackService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.feedback.getFeedback().subscribe((response: any) => {
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
    projectId: '',
    feedbackDate: '',
    feedbackType: '',
    actionTaken: '',
    closureDate:'',
    details:''
  };

  delete(id: string) {
    this.feedback.deleteFeedback(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.feedback.updateFeedback(id, this.formData).subscribe(
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
    console.log('Form submitted:', this.formData);
    this.feedback.createFeedback(this.formData).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
