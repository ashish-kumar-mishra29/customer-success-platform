import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrl: './project-budget.component.css',
})
export class ProjectBudgetComponent implements OnInit {
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
  constructor(private budget: ProjectService) {}
  formData: any = {
    projectId:'',
    type: '',
    durationInMonths: null,
    budgetedHours: null,
    budgetedCost:'',
    currency:''
  };
  ngOnInit(): void {
    this.budget.getBudget().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects)
    });
  }

  delete(id:string){
    this.budget.deleteBudget(id).subscribe((response:any) => {
      null
    })
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.budget.createBudget(this.formData).subscribe()
  }
}
