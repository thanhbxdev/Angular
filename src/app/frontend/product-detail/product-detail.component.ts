import {Component, OnInit} from '@angular/core';
import {Product} from "../../Product";
import {ProductService} from "../../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
  ) {
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

}
