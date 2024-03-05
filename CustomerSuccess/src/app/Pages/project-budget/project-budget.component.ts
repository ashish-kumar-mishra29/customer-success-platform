import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrl: './project-budget.component.css',
})
export class ProjectBudgetComponent implements OnInit {
  projects: [] | any;
  constructor(private budget: ProjectService) {}
  formData: any = {
    id:'',
    name: '',
    budget: null,
    time: null
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
    this.budget.createBudget(this.formData.value).subscribe((response:any) =>{
      console.log(response)
    })
  }
}
