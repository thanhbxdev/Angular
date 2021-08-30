import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {Product} from "../../Product";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[]

  constructor(
    private ProductService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.ProductService.getProducts().subscribe(data => {
      this.products = data
    })
  }
}
