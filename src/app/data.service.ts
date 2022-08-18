import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Budget } from './shared/models/budget';
import { BudgetItem } from './shared/models/budget-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>('api/budgets');
  }

  getBudget(id: number): Observable<Budget> {
    return this.http.get<Budget>(`api/budgets?id=${id}`);
  }

  getBudgetItems(budgetId: number): Observable<BudgetItem[]> {
    return this.http.get<BudgetItem[]>(`api/budgetItems?budgetId=${budgetId}`);
  }
}
