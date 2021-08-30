import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../Product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.route.params.subscribe(param => {
      this.ProductService.getProduct(param.id).subscribe(data => {
        this.product = data
      })
    })
  }

  updateProduct() {
    this.ProductService.updateProduct(this.product).subscribe(() => {
      alert("Update sucesfully !")
      this.router.navigate(['/admin/products'])
    })

  }
}
