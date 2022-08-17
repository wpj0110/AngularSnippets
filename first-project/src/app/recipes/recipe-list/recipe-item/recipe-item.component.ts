import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('itemRecipe') recipe: Recipe;
  @Output() recipeListEmitter = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipeItem () {
    console.log("item clicked");
    this.recipeListEmitter.emit();
  }
}
