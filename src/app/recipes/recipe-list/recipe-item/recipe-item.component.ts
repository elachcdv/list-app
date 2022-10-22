import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeClass } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeClass;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSelectedRecipe() {
    this.recipeSelected.emit();
  }
}
