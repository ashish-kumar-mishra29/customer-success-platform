import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { PhaseMilestoneService } from '../../services/phase-milestone.service';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrl: './phase.component.css',
})
export class PhaseComponent {
  projects: [] | any;
  @ViewChild('content', { static: false }) content!: ElementRef;
  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Budget.pdf');
      },
    });
  }
  constructor(private phase: PhaseMilestoneService) {}
  formData: any = {
    projectId: '',
    type: '',
    durationInMonths: null,
    budgetedHours: null,
    budgetedCost: '',
    currency: '',
  };
  ngOnInit(): void {
    this.phase.getPhase().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.phase.deletePhase(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.phase.createPhase(this.formData).subscribe();
  }
}
