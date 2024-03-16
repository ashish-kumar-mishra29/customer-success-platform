import { Component } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import { ProjectResourcesService } from '../../services/project-resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
})
export class ResourcesComponent {
  projects: [] | any;
  constructor(
    private resource: ProjectResourcesService,
    private project: CreateProjectService
  ) {}
  formData: any = {
    projectId: '',
    allocationPercentage: '',
    start: '',
    end: '',
    role: '',
  };

  ngOnInit(): void {
    this.loadProjects();
    this.getId();
  }

  loadProjects() {
    this.resource.getResource().subscribe((response: any) => {
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

  edit(id: string) {
    this.resource.updateResource(id, this.formData).subscribe(
      () => {
        console.log('Audit record updated successfully');
        this.loadProjects(); // Reload projects after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
      }
    );
  }

  delete(id: string) {
    this.resource.deleteResource(id).subscribe((response: any) => {
      console.log('Project deleted successfully');
      this.loadProjects();
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.resource.createResource(this.formData).subscribe(() => {
      alert('Project created successfully');
      this.loadProjects(); // Reload projects after successful creation
    });
  }
}
