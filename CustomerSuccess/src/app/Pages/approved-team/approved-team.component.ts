import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApprovedTeamService } from '../../services/approved-team.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-approved-team',
  templateUrl: './approved-team.component.html',
  styleUrl: './approved-team.component.css',
})
export class ApprovedTeamComponent {
  projects: [] | any;
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private approvedTeam: ApprovedTeamService) {}

  ngOnInit(): void {
    this.loadBudgets(); // Load budgets initially
  }

  loadBudgets() {
    this.approvedTeam.getTeam().subscribe((response: any) => {
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

  formData: any = {
    projectId: '',
    type: '',
    durationInMonths: null,
    budgetedHours: null,
    budgetedCost: '',
    currency: '',
  };

  delete(id: string) {
    this.approvedTeam.deleteTeam(id).subscribe(() => {
      console.log('Budget record deleted successfully');
      this.loadBudgets(); // Reload budgets after successful deletion
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.approvedTeam.createTeam(this.formData).subscribe(() => {
      console.log('Budget record created successfully');
      this.loadBudgets(); // Reload budgets after successful creation
    });
  }
}
