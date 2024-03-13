import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projects: [] | any;
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private project: CreateProjectService) {}

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

  delete(id:string){
    this.project.deleteProject(id).subscribe((response:any) => {
      console.log('Project deleted successfully');
      this.loadProjects(); 
    });
  }
  
}
