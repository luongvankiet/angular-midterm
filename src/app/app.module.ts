import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ProductComponent } from './components/body/product/product.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    HomeComponent,
    ProductComponent,
    SidebarComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
