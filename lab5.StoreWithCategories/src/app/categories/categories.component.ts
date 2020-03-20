import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CategoriesService: CategoriesService) { }
  getCategories(): void{
    this.CategoriesService.getCategories().subscribe(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getCategories();
}

}
