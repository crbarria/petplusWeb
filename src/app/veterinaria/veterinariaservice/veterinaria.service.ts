import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinaria } from '../models/veterinaria';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {
  
  URLAnimal :  string = 'http://127.0.0.1:8000/app_animal/veterinaria/';

  constructor(private http : HttpClient) { }

  getVeterinaria(): Observable<Veterinaria[]>{
    return this.http.get<Veterinaria[]>(this.URLAnimal);


  }

  getunavete(nombre : string): Observable<Veterinaria>{
    return this.http.get<Veterinaria>(this.URLAnimal + nombre)
  }

}
