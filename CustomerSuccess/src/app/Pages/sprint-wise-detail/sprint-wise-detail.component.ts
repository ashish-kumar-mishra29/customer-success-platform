import { Component, ElementRef, ViewChild } from '@angular/core';
import { SprintService } from '../../services/sprint.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sprint-wise-detail',
  templateUrl: './sprint-wise-detail.component.html',
  styleUrl: './sprint-wise-detail.component.css'
})
export class SprintWiseDetailComponent {

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
  constructor(private sprint: SprintService) {}
  formData: any = {
    version:'',
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: '',
    approvalDate: '',
    approvedBy: '',
  };
  ngOnInit(): void {
    this.sprint.getSprint().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.sprint.deleteSprint(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.sprint
      .createSprint(this.formData)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
