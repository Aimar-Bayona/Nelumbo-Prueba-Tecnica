import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoInterface } from 'src/app/interfaces/producto-interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalles-prod',
  templateUrl: './detalles-prod.component.html',
  styleUrls: ['./detalles-prod.component.scss']
})
export class DetallesProdComponent implements OnInit {
  producto!: ProductoInterface
  productoId!: number
  porcentajeBarra: number = 15
  texto: boolean = false //para cambiar texto del boton
  productosFiltrados: ProductoInterface[] = []

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
    ) {}

  ngOnInit():void {
    this.productoId = +this.route.snapshot.paramMap.get('id')!
    this.productoService.getProducto(this.productoId).subscribe(producto => {
      this.producto = producto
    })
    this.productoService.getProductos().subscribe(producto => {
      this.productosFiltrados = producto
    })    
  }
  
}
