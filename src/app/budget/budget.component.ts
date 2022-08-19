import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  budgetDate!: Date;

  showError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.route.data.subscribe(({ budgetData }) => {
      this.budget = budgetData.budget[0];
      this.budgetItems = budgetData.budgetItems;
      if (!this.budget) {
        this.router.navigate(['dashboard']);
      }
      this.budgetDate = new Date(this.budget.year, this.budget.month, 1);

    })
  }
}
