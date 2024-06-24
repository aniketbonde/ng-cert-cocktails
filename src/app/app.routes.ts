import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent, pathMatch:'full'},
    { path: 'cocktails/:cocktailId', component: RecipeDetailsComponent },
];
