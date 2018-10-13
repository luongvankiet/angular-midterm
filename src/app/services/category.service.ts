import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories$ = new Subject<any>();
  public subcategories$ = new Subject<any>();
  categoriesChange(value: any) {
    this.categories$.next(value);
  }

  subcategoriesChange(value: any) {
    this.subcategories$.next(value);
  }
  constructor(private _http: HttpClient) {
    this.getAllCategories();
    this.getAllSubCategories();
  }

  getAllCategories() {
    this._http.get("http://localhost:8080/Mid_term/rest/services/categories").subscribe(
      data => {
        this.categoriesChange(data);
      }
    );
  }

  getAllSubCategories() {
    this._http.get("http://localhost:8080/Mid_term/rest/services/sub-categories").subscribe(
      data => {
        this.subcategoriesChange(data);
      }
    );
  }
}
