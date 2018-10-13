import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products$;
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this._productService.product$;
  }

}
