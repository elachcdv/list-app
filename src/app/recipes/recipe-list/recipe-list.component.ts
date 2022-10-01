import { Component, OnInit } from '@angular/core';
import { RecipeClass } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeClass[] = [
    new RecipeClass(
      'Recipe1 name',
      'test1 description',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/szarlotka_79.jpg'
    ),
    new RecipeClass(
      'Recipe2 name',
      'test2 description',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/szarlotka_79.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
