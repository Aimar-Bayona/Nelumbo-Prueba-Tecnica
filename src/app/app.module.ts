import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesProdComponent } from './components/productos/detalles-prod/detalles-prod.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaProdComponent } from './components/productos/lista-prod/lista-prod.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { ModalProdComponent } from './components/productos/modal-prod/modal-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesProdComponent,
    FooterComponent,
    HeaderComponent,
    ListaProdComponent,
    ProductoComponent,
    ModalProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
