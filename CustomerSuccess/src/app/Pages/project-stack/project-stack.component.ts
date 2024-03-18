import { Component } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import { ProjectStackService } from '../../services/project-stack.service';

@Component({
  selector: 'app-project-stack',
  templateUrl: './project-stack.component.html',
  styleUrl: './project-stack.component.css'
})
export class ProjectStackComponent {

  constructor(
    private stack: ProjectStackService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.stack.getStack().subscribe((response: any) => {
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
    technology:'',
    
  };

  delete(id: string) {
    this.stack.deleteStack(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.stack.updateStack(id, this.formData).subscribe(
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
    this.stack.createStack(this.formData).subscribe(() => {
      this.loadAuditRecords(); // Reload audit records after successful creation
    });
  }
}
