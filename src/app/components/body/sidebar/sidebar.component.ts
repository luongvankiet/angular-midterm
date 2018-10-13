import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public categories$;
  public subcategories$;
  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this._categoryService.categories$;
    this.subcategories$ = this._categoryService.subcategories$;
  }

}
