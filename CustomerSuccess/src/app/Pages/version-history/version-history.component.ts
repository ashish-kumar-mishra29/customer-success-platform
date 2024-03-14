import { Component, ElementRef, ViewChild } from '@angular/core';
import { VersionService } from '../../services/version.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrl: './version-history.component.css',
})
export class VersionHistoryComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('VersionHistory.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private version: VersionService,private project: CreateProjectService) {}
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
    this.loadProjects();
    this.getId();
  }

  loadProjects() {
    this.version.getVersion().subscribe((response: any) => {
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
    this.version.updateVersion(id, this.formData).subscribe(
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
    this.version.deleteVersion(id).subscribe((response: any) => {
      alert(' Deleted successfully');
      this.loadProjects();
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.version.createVersion(this.formData).subscribe(() => {
      this.loadProjects(); // Reload projects after successful creation
    });
  }
}
