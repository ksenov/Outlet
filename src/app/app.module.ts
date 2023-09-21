import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './pages/home/components/products-header/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';

import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
