import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScopeService } from '../../services/scope.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project-scope',
  templateUrl: './project-scope.component.html',
  styleUrl: './project-scope.component.css',
})
export class ProjectScopeComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Scope.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private scope: ScopeService) {}
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
    this.scope.getScope().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.scope.deleteScope(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.scope.createScope(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }
}
