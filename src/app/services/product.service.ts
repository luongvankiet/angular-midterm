import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product$ = new Subject<any>();
  productChange(value){
    this.product$.next(value);
  }

  constructor(private _http: HttpClient) {
    this.getAllProducts();
  }
  getAllProducts(){
    this._http.get("http://localhost:8080/Mid_term/rest/services/products").subscribe(
      data => this.productChange(data)
    )
  }
}
