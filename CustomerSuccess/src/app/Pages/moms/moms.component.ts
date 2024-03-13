import { Component } from '@angular/core';
import { CreateProjectService } from '../../services/create-project.service';
import { MomService } from '../../services/mom.service';

@Component({
  selector: 'app-moms',
  templateUrl: './moms.component.html',
  styleUrl: './moms.component.css'
})
export class MOMsComponent {
  constructor(private MOM: MomService,private project: CreateProjectService) {}

  ngOnInit(): void {
    this.loadDescriptions(); // Load descriptions initially
    this.getId();
  }
  availableIds: [] | any;
  getId() {
    this.project.getProject().subscribe((response: any) => {
      this.availableIds = response.items;
      console.log(this.availableIds);
    });
  }

  loadDescriptions() {
    this.MOM.getMOM().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }
  projects: [] | any;
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

  delete(id: string) {
    this.MOM.deleteMOM(id).subscribe(() => {
      console.log('Description deleted successfully');
      this.loadDescriptions(); // Reload descriptions after successful deletion
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.MOM.createMOM(this.formData).subscribe(() => {
      console.log('Description created successfully');
      this.loadDescriptions(); // Reload descriptions after successful creation
    });
  }
}
