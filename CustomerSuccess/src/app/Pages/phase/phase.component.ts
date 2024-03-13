import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { PhaseMilestoneService } from '../../services/phase-milestone.service';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrl: './phase.component.css',
})
export class PhaseComponent {
  constructor(
    private phase: PhaseMilestoneService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.phase.getPhase().subscribe((response: any) => {
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

  projects: [] | any;
  formData: any = {
    projectId: '',
    startDate: '',
    endDate: '',
    description: '',
    comments: '',
    status: '',
  };

  delete(id: string) {
    this.phase.deletePhase(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.phase.updatePhase(id, this.formData).subscribe(
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
    this.phase.createPhase(this.formData).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
