import { Component, ElementRef, ViewChild } from '@angular/core';
import { StakeHolderService } from '../../services/stake-holder.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrl: './stakeholders.component.css',
})
export class StakeholdersComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('StakeHolder.pdf');
      },
    });
  }

  projects: [] | any;
  constructor(private stakeHolder: StakeHolderService) {}
  formData: any = {
    version: '',
    type: '',
    change: '',
  };
  ngOnInit(): void {
    this.stakeHolder.getStakeHolder().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.stakeHolder.deleteStakeHolder(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.stakeHolder.createStakeHolder(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }
}
