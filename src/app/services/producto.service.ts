import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  private API_URI = "../../assets/JSON/productos.json"
  
  constructor(private http:HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URI)
  }

  getProducto(id:number): Observable<any> {
    return this.http.get<any[]>(this.API_URI).pipe(
      map((producto: any[]) => producto.find(producto => producto.id == id))
    )
  }

}
