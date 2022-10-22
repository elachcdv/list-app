import { Component, OnInit, Input } from '@angular/core';
import { RecipeClass } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeClass;

  constructor() {}

  ngOnInit(): void {}
}
