import { Component, ElementRef, ViewChild } from '@angular/core';
import { StakeHolderService } from '../../services/stake-holder.service';
import jsPDF from 'jspdf';
import { CreateProjectService } from '../../services/create-project.service';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrl: './stakeholders.component.css',
})
export class StakeholdersComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(
    private stake: StakeHolderService,
    private project: CreateProjectService
  ) {}

  ngOnInit(): void {
    this.loadAuditRecords(); // Load audit records initially
    this.getId();
  }

  loadAuditRecords() {
    this.stake.getStakeHolder().subscribe((response: any) => {
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

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a3');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('StakeHolder.pdf');
      },
    });
  }

  projects: [] | any;
  formData: any = {
    projectId: '',
    title: '',
    name: '',
    contact: '',
  };

  delete(id: string) {
    this.stake.deleteStakeHolder(id).subscribe(() => {
      console.log('Audit record deleted successfully');
      this.loadAuditRecords(); // Reload audit records after successful deletion
    });
  }

  edit(id: string) {
    this.stake.updateStakeHolder(id, this.formData).subscribe(
      () => {
        console.log('Audit record updated successfully');
        this.loadAuditRecords(); // Reload audit records after successful update
      },
      (error) => {
        console.error('Error updating audit record:', error);
        // Optionally, handle the error gracefully and provide user feedback
      }
    );
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.stake.createStakeHolder(this.formData).subscribe(() => {
      console.log('Audit record created successfully');
      this.loadAuditRecords(); // Reload audit records after successful creation
      this.formData=  {
        projectId: '',
        title: '',
        name: '',
        contact: '',
      };
    });
  }
}
