import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Budget } from '../shared/models/budget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  budgets: {id: number, year: number, month: number, budgetDate: Date}[] = [];
  displayedColumns: string[] = ['id', 'budgetDate'];

  @ViewChild(MatTable) table!: MatTable<{id: number, year: number, month: number, budgetDate: Date}>;

  ngOnInit(): void {
    this.route.data.subscribe(({ dashboardData }) => {
      let data: Budget[] = dashboardData;
      this.budgets = data.map((x) => { return { ...x, budgetDate: new Date(x.year, x.month, 1) } });
      console.log(this.budgets);
    });
  }

  addBudget(): void {
    let id: number = (this.budgets.length > 0) ? Math.max(...this.budgets.map(x => x.id)) + 1 : 1;
    this.budgets.push({ id: id, year: 2022, month: 1, budgetDate: new Date(2022, 1, 1) });
    this.table.renderRows();
  }

  removeBudget(): void {
    this.budgets.pop();
    this.table.renderRows();
  }
}
