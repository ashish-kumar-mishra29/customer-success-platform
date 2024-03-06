import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectDescriptionService } from '../../services/project-description.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css',
})
export class ProjectDescriptionComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Description.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private description: ProjectDescriptionService) {}
  formData: any = {
    version: '',
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: '',
    approvalDate: '',
    approvedBy: '',
  };
  ngOnInit(): void {
    this.description.getDescription().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.description.deleteDescription(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.description
      .createDescription(this.formData)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
