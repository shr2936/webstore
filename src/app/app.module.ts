import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import {
//   MatSidenavModule,
//   MatGridListModule,
//   MatMenuModule,
//   MatButtonModule,
//   MatCardModule,
//   MatExpansionModule,
//   MatListModule,
//   MatToolbarModule,
//   MatTableModule,
//   MatBadgeModule,
//   MatSnackBarModule,
//   // MatIconModule,
// } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';
import { ProductHeaderComponent } from './pages/home/components/product-header/product-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ProductHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    // MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    // MatToolbarModule,
    MatTableModule,
    // MatSnackBarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
