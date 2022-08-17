import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cheescake', 'A Cheesecake is a cake comprised of cheese','https://assets.bonappetit.com/photos/5c48972f52d8785eddd4a72c/master/pass/burnt-basque-cheesecake-1.jpg')
    , new Recipe('Applie Pie', 'A Pie with Apple','https://www.inspiredtaste.net/wp-content/uploads/2019/11/Homemade-Apple-Pie-From-Scratch-1200.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClickRecipeItem(clickedRecipe : Recipe) {
    this.recipeWasSelected.emit(clickedRecipe);
  }
}
