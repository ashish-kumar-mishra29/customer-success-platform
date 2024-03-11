import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectDescriptionService } from '../../services/project-description.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css'] // Use styleUrls instead of styleUrl
})
export class ProjectDescriptionComponent implements OnInit {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private description: ProjectDescriptionService) {}

  ngOnInit(): void {
    this.loadDescriptions(); // Load descriptions initially
  }

  loadDescriptions() {
    this.description.getDescription().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Description.pdf');
      },
    });
  }

  projects: [] | any;
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

  delete(id: string) {
    this.description.deleteDescription(id).subscribe(() => {
      console.log('Description deleted successfully');
      this.loadDescriptions(); // Reload descriptions after successful deletion
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.description.createDescription(this.formData).subscribe(() => {
      console.log('Description created successfully');
      this.loadDescriptions(); // Reload descriptions after successful creation
    });
  }
}
