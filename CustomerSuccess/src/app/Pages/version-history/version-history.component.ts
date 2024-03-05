import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrl: './version-history.component.css',
})
export class VersionHistoryComponent {
  projects: [] | any;
  constructor(private version: VersionService) {}
  formData: any = {
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: '',
    approvalDate: '',
    approvedBy: '',
    id: '',
  };
  ngOnInit(): void {
    this.version.getVersion().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.version.deleteVersion(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.version
      .createVersion(this.formData.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
