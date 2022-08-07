import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Budget } from '../shared/models/budget';
import { BudgetItem } from '../shared/models/budget-item';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  id!: number;
  budget: Budget | undefined;
  budgetItems: BudgetItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }
  // TODO: what if the budget doesn't exist?
  ngOnInit(): void {
    this.route.data.subscribe(({ budgetData }) => {
      this.budget = budgetData[0];
      this.budgetItems = budgetData[1];
    })
  }
}
