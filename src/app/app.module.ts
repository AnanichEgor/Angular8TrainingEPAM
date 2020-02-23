import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { NavModule } from './header/nav.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    NavModule,
    SharedModule,
    LayoutModule,
    OrderModule,
    AdminModule,
    // MUST BE LAST
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
