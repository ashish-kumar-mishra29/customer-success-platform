import { Component} from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import { ProjectUpdateService } from '../../services/project-update.service';


@Component({
  selector: 'app-project-updates',
  templateUrl: './project-updates.component.html',
  styleUrl: './project-updates.component.css'
})
export class ProjectUpdatesComponent {

  constructor(
    private update: ProjectUpdateService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.update.getUpdate().subscribe((response: any) => {
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
    title: '',
    name: '',
    contact: '',
  };

  delete(id: string) {
    this.update.deleteUpdate(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.update.updateUpdate(id, this.formData).subscribe(
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
    this.update.createUpdate(this.formData).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
