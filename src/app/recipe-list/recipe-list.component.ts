import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent{
    allList: Recipe[] = []
    recipeList: Recipe[] = []

    searchControl: FormControl = new FormControl('');
    
    ngOnInit(): void {
      if(this.recipeList.length == 0){
        this.rService.getAllRecipes().subscribe(
          (res) => this.allList = this.recipeList = res,
          (err) => console.log(err)
        )
      }else{

      }
      this.searchControl.valueChanges.subscribe(searchTerm => {
        if (searchTerm) {
          this.recipeList = this.allList.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          this.recipeList = [...this.allList];
        }
      });
    }

    constructor(private rService: RecipeService, private favoriteService: FavoriteService) {}

    toggleFavorite(cocktailId: string) {
      if (this.favoriteService.isFavorite(cocktailId)) {
        this.favoriteService.removeFavorite(cocktailId);
      } else {
        this.favoriteService.addFavorite(cocktailId);
      }
    }
  
    isFavorite(cocktailId: string): boolean {
      return this.favoriteService.isFavorite(cocktailId);
    }

}
