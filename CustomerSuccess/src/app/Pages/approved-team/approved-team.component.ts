import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApprovedTeamService } from '../../services/approved-team.service';
import { CreateProjectService } from '../../services/create-project.service';


@Component({
  selector: 'app-approved-team',
  templateUrl: './approved-team.component.html',
  styleUrl: './approved-team.component.css',
})
export class ApprovedTeamComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private approve: ApprovedTeamService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.approve.getTeam().subscribe((response: any) => {
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
    phase: '',
    numberOfResources: '',
    role: '',
    availabilityPercentage: '',
    duration: '',
  };

  delete(id: string) {
    this.approve.deleteTeam(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.approve.updateTeam(id, this.formData).subscribe(
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
    this.approve.createTeam(this.formData).subscribe(() => {
      console.log('Audit record created successfully');
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
