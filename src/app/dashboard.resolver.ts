import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Budget } from './shared/models/budget';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<Budget[]> {

  constructor(
    private dataService: DataService,
    ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Budget[]> {
    return this.dataService.getBudgets();
  }
}
