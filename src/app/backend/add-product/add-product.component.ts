import {Component, OnInit} from '@angular/core';
import {Product} from "../../Product";
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product()

  constructor(
    private ProductService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async addProduct() {
    await this.ProductService.addProduct(this.product).subscribe(()=>{
      alert("Add Product Successfully !")
      this.router.navigate(['/admin/products']);
    })

  }
}
