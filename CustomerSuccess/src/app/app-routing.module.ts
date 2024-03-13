import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditHistoryComponent } from './Pages/audit-history/audit-history.component';
import { EscalationMatrixComponent } from './Pages/escalation-matrix/escalation-matrix.component';
import { PhaseComponent } from './Pages/phase/phase.component';
import { ProjectBudgetComponent } from './Pages/project-budget/project-budget.component';
import { RiskProfilingComponent } from './Pages/risk-profiling/risk-profiling.component';
import { StakeholdersComponent } from './Pages/stakeholders/stakeholders.component';
import { VersionHistoryComponent } from './Pages/version-history/version-history.component';
import { ProjectDescriptionComponent } from './Pages/project-description/project-description.component';
import { ProjectScopeComponent } from './Pages/project-scope/project-scope.component';
import { ProjectStackComponent } from './Pages/project-stack/project-stack.component';
import { ProjectComponent } from './Pages/project/project.component';
import { ApprovedTeamComponent } from './Pages/approved-team/approved-team.component';
import { AllProjectsComponent } from './Pages/all-projects/all-projects.component';
import { ClientComponent } from './Pages/client/client.component';
import { ProjectUpdatesComponent } from './Pages/project-updates/project-updates.component';
import { ClientFeedbackComponent } from './Pages/client-feedback/client-feedback.component';
import { MOMsComponent } from './Pages/moms/moms.component';
import { SprintWiseDetailComponent } from './Pages/sprint-wise-detail/sprint-wise-detail.component';

const routes: Routes = [
  { path: 'approvedTeam', component: ApprovedTeamComponent },
  { path: 'version', component: VersionHistoryComponent },
  { path: 'audit', component: AuditHistoryComponent },
  { path: 'escalation', component: EscalationMatrixComponent },
  { path: 'phase', component: PhaseComponent },
  { path: 'budget', component: ProjectBudgetComponent },
  { path: 'risk', component: RiskProfilingComponent },
  { path: 'stakeholder', component: StakeholdersComponent },
  { path: 'description', component: ProjectDescriptionComponent },
  { path: 'scope', component: ProjectScopeComponent },
  { path: 'stack', component: ProjectStackComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'allProject', component: AllProjectsComponent },
  {path: 'client',component:ClientComponent},
  {path:'projectUpdate', component:ProjectUpdatesComponent},
  {path:'clientFeedback', component:ClientFeedbackComponent},
  {path:'mom', component:MOMsComponent},
  {path:'sprint',component:SprintWiseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
