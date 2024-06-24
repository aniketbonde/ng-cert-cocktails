import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipes(){
    return this.http.get<Recipe[]>("/cockails")
  }
  getRecipe(id: string){
    return this.http.get<Recipe>("/cockails/"+id)
  }
}
