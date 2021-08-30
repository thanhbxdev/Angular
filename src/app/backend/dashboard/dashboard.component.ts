import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {Product} from "../../Product";
import {Category} from "../../Category";
import {CategoryService} from "../../category.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[]
  category: Category[]

  constructor(
    private ProductsService: ProductService,
    private CategoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.getCate()
  }

  getProducts() {
    this.ProductsService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  getCate() {
    this.CategoryService.getCategories().subscribe(data => {
      this.category = data
    })
  }
}
