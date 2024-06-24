import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoritesKey: string = 'favorites';

  constructor() { }

  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(id: string) {
    const favorites = this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(id: string) {
    const favorites = this.getFavorites().filter(favoriteId => favoriteId !== id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  isFavorite(id: string): boolean {
    return this.getFavorites().includes(id);
  }

}
