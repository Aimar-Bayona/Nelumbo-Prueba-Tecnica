import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', activo: false },
    { label: 'Celulares', activo: true },
    { label: 'Motocicletas', activo: false },
    { label: 'Tus préstamos', activo: false },
    { label: 'Tiendas', activo: false },
    { label: 'Tracking', activo: false },
    { label: 'Club Macropay', activo: false }
  ];

  constructor (private router:Router) {}

  itemSeleccionado(item:{label:string, activo:boolean}):void {
    this.menuItems.forEach(item => item.activo = false)
    item.activo = true
    this.router.navigate(['productos/', item.label.toLowerCase()])
  }
}
