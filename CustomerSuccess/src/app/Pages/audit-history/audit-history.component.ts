import { Component } from '@angular/core';
import { AuditService } from '../../services/audit.service';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrl: './audit-history.component.css',
})
export class AuditHistoryComponent {
  projects: [] | any;
  constructor(private audit: AuditService) {}
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
    this.audit.getAudit().subscribe((response: any) => {
      this.projects = response.items;
      console.log(this.projects);
    });
  }

  delete(id: string) {
    this.audit.deleteAudit(id).subscribe((response: any) => {
      null;
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.audit
      .createAudit(this.formData.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
