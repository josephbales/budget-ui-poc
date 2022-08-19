import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of, pipe, withLatestFrom } from 'rxjs';
import { DataService } from './data.service';
import { Budget } from './shared/models/budget';
import { BudgetItem } from './shared/models/budget-item';

@Injectable({
  providedIn: 'root'
})
export class BudgetResolver implements Resolve<{ budget: Budget, budgetItems: BudgetItem[] }> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<{ budget: Budget, budgetItems: BudgetItem[] }> {
      const id = Number(route.paramMap.get('id'));
      return forkJoin({
        budget: this.dataService.getBudget(id),
        budgetItems: this.dataService.getBudgetItems(id)
      });
  }
}
