import {Component, OnInit} from '@angular/core';
import {Product} from "../../Product";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]

  constructor(
    private ProductService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.ProductService.getProducts().subscribe(data => {
      this.products = data
    })
  }

}
