import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { AuditHistoryComponent } from './Pages/audit-history/audit-history.component';
import { EscalationMatrixComponent } from './Pages/escalation-matrix/escalation-matrix.component';
import { PhaseComponent } from './Pages/phase/phase.component';
import { ProjectBudgetComponent } from './Pages/project-budget/project-budget.component';
import { RiskProfilingComponent } from './Pages/risk-profiling/risk-profiling.component';
import { StakeholdersComponent } from './Pages/stakeholders/stakeholders.component';
import { VersionHistoryComponent } from './Pages/version-history/version-history.component';

const routes: Routes = [
  {path: '', component:NavbarComponent},
  {path:'version', component:VersionHistoryComponent},
  {path: 'audit', component:AuditHistoryComponent},
  {path:'escalation', component:EscalationMatrixComponent},
  {path:'phase', component:PhaseComponent},
  {path:'budget', component:ProjectBudgetComponent},
  {path:'risk', component:RiskProfilingComponent},
  {path:'stakeholder', component:StakeholdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
