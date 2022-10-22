import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeClass } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeClass>();

  recipes: RecipeClass[] = [
    new RecipeClass(
      'Recipe1 name',
      'description1',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/szarlotka_79.jpg'
    ),
    new RecipeClass(
      'Recipe2 name',
      'description2',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/szarlotka_79.jpg'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}

  onSelectOneRecipe(recipe: RecipeClass) {
    this.recipeWasSelected.emit(recipe);
  }
}
