import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {Product} from "../../Product";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
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

  async removeProduct(id: number) {
    await alert("Do you want to delete ?")
    this.ProductService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(product => product.id !== data.id)
    })
  }

}
