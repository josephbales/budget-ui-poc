import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Budget } from './shared/models/budget';
import { BudgetItem } from './shared/models/budget-item';

@Injectable({
  providedIn: 'root'
})
export class InMemService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {

    const budgets: Budget[] = [
      { id: 1, month: 7, year: 2022 },
      { id: 2, month: 8, year: 2022 },
      { id: 3, month: 9, year: 2022 },
    ];

    const budgetItems: BudgetItem[] = [
      { id: 1, budgetId: 1, name: 'Mortgage', notes: 'Don\'t forget to pay this', amount: 1400.32 },
      { id: 2, budgetId: 1, name: 'Electricity', notes: 'Don\'t forget to pay this', amount: 140.32 },
      { id: 3, budgetId: 1, name: 'Food', notes: 'Don\'t forget to pay this', amount: 240.32 },
      { id: 4, budgetId: 1, name: 'Water', notes: 'Don\'t forget to pay this', amount: 40.00 },
      { id: 5, budgetId: 1, name: 'Automotive', notes: 'Don\'t forget to pay this', amount: 600.19 },
      { id: 6, budgetId: 2, name: 'Mortgage', notes: 'Don\'t forget to pay this', amount: 1400.32 },
      { id: 7, budgetId: 2, name: 'Electricity', notes: 'Don\'t forget to pay this', amount: 140.32 },
      { id: 8, budgetId: 2, name: 'Food', notes: 'Don\'t forget to pay this', amount: 340.32 },
      { id: 9, budgetId: 2, name: 'Water', notes: 'Don\'t forget to pay this', amount: 40.00 },
      { id: 10, budgetId: 2, name: 'Automotive', notes: 'Don\'t forget to pay this', amount: 600.19 },
      { id: 11, budgetId: 3, name: 'Mortgage', notes: 'Don\'t forget to pay this', amount: 1400.32 },
      { id: 12, budgetId: 3, name: 'Electricity', notes: 'Don\'t forget to pay this', amount: 140.32 },
      { id: 13, budgetId: 3, name: 'Food', notes: 'Don\'t forget to pay this', amount: 440.32 },
      { id: 14, budgetId: 3, name: 'Water', notes: 'Don\'t forget to pay this', amount: 40.00 },
      { id: 15, budgetId: 3, name: 'Automotive', notes: 'Don\'t forget to pay this', amount: 600.19 },
    ];

    return { budgets, budgetItems };
  }
}
