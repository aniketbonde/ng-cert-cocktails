import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RecipeListComponent ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
