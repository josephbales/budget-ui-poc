import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetItemComponent } from './budget-item/budget-item.component';
import { BudgetResolver } from './budget.resolver';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  {
    path: 'budget/:id',
    component: BudgetComponent,
    resolve: {
      budgetData: BudgetResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
