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
  budget!: Budget;
  budgetItems: BudgetItem[] = [];
  constructor(
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.data.subscribe(({ budgetData }) => {
      this.budget = budgetData[0];
      this.budgetItems = budgetData[1];
      if (!this.budget) {
        // TODO: what if the budget doesn't exist? Should I handle this in the router or resolver?
      }
    })
  }
}
