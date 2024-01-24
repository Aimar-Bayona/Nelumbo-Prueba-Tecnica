import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private API_URI = "../../assets/JSON/marcas.json"

  constructor(private http:HttpClient) { }

  getMarcas(categoria: string): Observable<any[]> {
    return this.http.get<any[]>(this.API_URI).pipe(
      map((marcas: any) => marcas[categoria] || [])
    )
  }
}
