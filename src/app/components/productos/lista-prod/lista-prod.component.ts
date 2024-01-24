import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductoInterface } from 'src/app/interfaces/producto-interface'
import { MarcasService } from 'src/app/services/marcas.service'
import { ProductoService } from 'src/app/services/producto.service'

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.scss']
})
export class ListaProdComponent implements OnInit {

  //Para efectos de la prueba decidi usar los JSON directamente en el TS (debido a que esos datos se optienen de la API)
  opciones = [
    { label: "Mejores reviews", value: "mejores-reviews" },
    { label: "Más economicos", value: "mas-economicos" },
    { label: "Más costosos", value: "mas-costosos" }
  ]

  categorias = [
    { label: "Todas las Categorías", value: "todas-categorias" },
    { label: "Más Rápidos", value: "rapidos" },
    { label: "Recientes", value: "recientes" }
  ]

  marcas: any[] = []
  productosFiltrados: ProductoInterface[] = []
  productos!: ProductoInterface[]
  marcasSeleccionadas: { [marca: string]: boolean } = {}

  constructor(
    private productoService: ProductoService,
    private marcasService: MarcasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('categoria') || 'todas-categorias'
      this.cargarMarcas(categoria)
    })

    this.productoService.getProductos().subscribe(productos => {
      this.productosFiltrados = productos
      this.productos = productos
    })
  }

  cargarMarcas(categoria: string): void {
    this.marcasService.getMarcas(categoria).subscribe(marcas => {
      this.marcas = marcas
      this.reiniciarFiltro()
    })
  }

  marcaSeleccionada(marca: string) {
    this.marcasSeleccionadas[marca] = !this.marcasSeleccionadas[marca]
    this.filtrarProductos()
  }

  filtrarProductos() {
    if (Object.values(this.marcasSeleccionadas).every(value => !value)) {
      this.productosFiltrados = this.productos
    } else {
      this.productosFiltrados = this.productos.filter(producto =>
        Object.keys(this.marcasSeleccionadas).some(marca =>
          this.marcasSeleccionadas[marca] && producto.marca == marca
        )
      )
    }
  }

  reiniciarFiltro(): void {
    this.marcasSeleccionadas = {}
    this.filtrarProductos()
  }

}
