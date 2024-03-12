import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDescriptionComponent } from './Pages/project-description/project-description.component';
import { ProjectScopeComponent } from './Pages/project-scope/project-scope.component';
import { ProjectStackComponent } from './Pages/project-stack/project-stack.component';
import { ApprovedTeamComponent } from './Pages/approved-team/approved-team.component';
import { ClientFeedbackComponent } from './Pages/client-feedback/client-feedback.component';
import { ProjectUpdatesComponent } from './Pages/project-updates/project-updates.component';
import { ResourcesComponent } from './Pages/resources/resources.component';
import { MOMsComponent } from './Pages/moms/moms.component';
import { ProjectComponent } from './Pages/project/project.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AuthModule } from '@auth0/auth0-angular';
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
    SidebarComponent,
    ProjectDescriptionComponent,
    ProjectScopeComponent,
    ProjectStackComponent,
    ApprovedTeamComponent,
    ClientFeedbackComponent,
    ProjectUpdatesComponent,
    ResourcesComponent,
    MOMsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    AuthModule.forRoot({
      domain: 'dev-bk13bjfn4p40ely1.us.auth0.com',
      clientId: 'iRG8G2clT427noluh6De7GDkFjqdHrHg',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [provideAnimationsAsync(), ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
