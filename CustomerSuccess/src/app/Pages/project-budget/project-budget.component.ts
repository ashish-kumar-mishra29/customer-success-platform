import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';
import { response } from 'express';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.css'], // Use styleUrls instead of styleUrl
})
export class ProjectBudgetComponent implements OnInit {
  projects: [] | any;

  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private budget: ProjectService,
    private project: CreateProjectService
  ) {}
  availableIds: [] | any;
  ngOnInit(): void {
    this.loadBudgets(); // Load budgets initially
    this.getId();
  }

  loadBudgets() {
    this.budget.getBudget().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }
  getId() {
    this.project.getProject().subscribe((response: any) => {
      this.availableIds = response.items;
      console.log(this.availableIds)
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
    this.budget.deleteBudget(id).subscribe(() => {
      console.log('Budget record deleted successfully');
      this.loadBudgets(); // Reload budgets after successful deletion
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.budget.createBudget(this.formData).subscribe(() => {
      console.log('Budget record created successfully');
      this.loadBudgets(); // Reload budgets after successful creation
    });
  }
}
