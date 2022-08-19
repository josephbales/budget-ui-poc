import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetResolver } from './budget.resolver';
import { BudgetComponent } from './budget/budget.component';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      dashboardData: DashboardResolver
    }
  },
  {
    path: 'budget/:id',
    component: BudgetComponent,
    resolve: {
      budgetData: BudgetResolver
    }
  },
  {
    path: '**',
    component: DashboardComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
