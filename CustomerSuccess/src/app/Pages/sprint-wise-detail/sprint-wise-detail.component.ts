import { Component, ElementRef, ViewChild } from '@angular/core';
import { SprintService } from '../../services/sprint.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';
import { PhaseMilestoneService } from '../../services/phase-milestone.service';

@Component({
  selector: 'app-sprint-wise-detail',
  templateUrl: './sprint-wise-detail.component.html',
  styleUrl: './sprint-wise-detail.component.css',
})
export class SprintWiseDetailComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('Sprint Details.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(
    private sprint: SprintService,
    private phase: PhaseMilestoneService
  ) {}
  formData: any = {
    phaseMilestoneId: '',
    startDate: '',
    endDate: '',
    status: '',
    comments: '',
    goals: '',
    sprintNumber: '',
  };

  ngOnInit(): void {
    this.loadProjects();
    this.getId();
  }

  loadProjects() {
    this.sprint.getSprint().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }
  availableIds: [] | any;
  getId() {
    this.phase.getPhase().subscribe((response: any) => {
      this.availableIds = response.items;
      console.log(this.availableIds);
    });
  }

  edit(id: string) {
    this.sprint.updateSprint(id, this.formData).subscribe(
      () => {
        this.loadProjects(); // Reload projects after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
      }
    );
  }

  delete(id: string) {
    this.sprint.deleteSprint(id).subscribe((response: any) => {
      this.loadProjects();
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.sprint.createSprint(this.formData).subscribe(() => {
      this.loadProjects(); // Reload projects after successful creation
    });
  }
}
