import { Component, OnInit } from '@angular/core';
import { IngredientsClass } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientsClass[] = [
    // new IngredientsClass('apples', 5),
    // new IngredientsClass('oranges', 3),
  ];

  constructor() {}
  ngOnInit() {}

  onIngredientsAdded(ingredients: IngredientsClass) {
    // this.ingredients.push(new IngredientsClass('apple', 5));
    this.ingredients.push(ingredients);
    // console.log(ingredients);
  }
}
