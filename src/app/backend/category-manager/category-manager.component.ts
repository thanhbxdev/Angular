import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../category.service";
import {Category} from "../../Category";

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {
  categories: Category[];

  constructor(
    private CategoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.CategoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
}
