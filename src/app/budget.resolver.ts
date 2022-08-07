import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, pipe, withLatestFrom } from 'rxjs';
import { DataService } from './data.service';
import { Budget } from './shared/models/budget';
import { BudgetItem } from './shared/models/budget-item';

@Injectable({
  providedIn: 'root'
})
export class BudgetResolver implements Resolve<[Budget, BudgetItem[]]> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<[Budget, BudgetItem[]]> {
      const id = Number(route.paramMap.get('id'));
      return this.dataService.getBudget(id).pipe(
        withLatestFrom(this.dataService.getBudgetItems(id))
      );
  }
}
