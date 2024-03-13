import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'] // Use styleUrls instead of styleUrl
})
export class ProjectComponent {
  
  formData: any = {
    name:'',
    description: '',
  };
  projects: [] | any;
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private project: CreateProjectService) {
    // Initialize form data
    this.formData.name = '';
    this.formData.description = '';
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.project.getProject().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Budget.pdf');
      },
    });
  }

  edit(id: string) {
    this.project.updateProject(id, this.formData).subscribe(
      () => {
        console.log('Audit record updated successfully');
        this.loadProjects(); // Reload projects after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
      }
    );
  }

  delete(id:string){
    this.project.deleteProject(id).subscribe((response:any) => {
      console.log('Project deleted successfully');
      this.loadProjects(); 
    });
  }


  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.project.createProject(this.formData).subscribe(() => {
      alert('Project created successfully');
      this.loadProjects(); // Reload projects after successful creation
      this.formData.name = ''; // Clear the name field
      this.formData.description = ''; // Clear the description field
    });
  }
  
}
