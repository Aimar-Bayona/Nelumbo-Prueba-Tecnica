import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoInterface } from 'src/app/interfaces/producto-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{
  mostrarModal = false;
  @Input() productos: ProductoInterface[] = [];
  categoria:string = 'celulares'
  
  constructor(private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || 'celulares';
      console.log(this.categoria);
    })
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
  
}
