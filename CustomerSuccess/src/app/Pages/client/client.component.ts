import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
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


}
