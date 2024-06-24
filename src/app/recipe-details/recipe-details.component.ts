import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipeId: string | null = '';
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private rService: RecipeService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('cocktailId');
    });
    if (typeof this.recipeId === 'string') {
      this.rService.getRecipe(this.recipeId).subscribe(
        (res) => this.recipe = res,
        (err) => console.log(err)
      )
    } else {
      console.error('Invalid ID');
    }
  }

  toggleFavorite() {
    if (this.recipe) {
      if (this.favoriteService.isFavorite(this.recipe.id)) {
        this.favoriteService.removeFavorite(this.recipe.id);
      } else {
        this.favoriteService.addFavorite(this.recipe.id);
      }
    }
  }

  isFavorite(): boolean {
    return this.recipe ? this.favoriteService.isFavorite(this.recipe.id) : false;
  }

}
