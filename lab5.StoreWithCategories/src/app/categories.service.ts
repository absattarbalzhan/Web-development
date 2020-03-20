import { Injectable } from '@angular/core';
import { Category } from './category';
import { categories } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  category: Category;
  getCategories(): Observable<Category[]> {
    return of(categories);
  }
  getCategory(id: number): Observable<Category> {


    return of(categories.find(category => category.id === id));
  }
  constructor() { }
}
