import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { ProjectBudgetComponent } from './Pages/project-budget/project-budget.component';
import { AuditHistoryComponent } from './Pages/audit-history/audit-history.component';
import { VersionHistoryComponent } from './Pages/version-history/version-history.component';
import { EscalationMatrixComponent } from './Pages/escalation-matrix/escalation-matrix.component';
import { StakeholdersComponent } from './Pages/stakeholders/stakeholders.component';
import { RiskProfilingComponent } from './Pages/risk-profiling/risk-profiling.component';
import { PhaseComponent } from './Pages/phase/phase.component';
import { SprintWiseDetailComponent } from './Pages/sprint-wise-detail/sprint-wise-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProjectBudgetComponent,
    AuditHistoryComponent,
    VersionHistoryComponent,
    EscalationMatrixComponent,
    StakeholdersComponent,
    RiskProfilingComponent,
    PhaseComponent,
    SprintWiseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
