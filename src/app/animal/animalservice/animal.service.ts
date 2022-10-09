import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  URLAnimal :  string = 'http://127.0.0.1:8000/app_animal/animal/';

  constructor(private http : HttpClient) { }

  getAnimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.URLAnimal);


  }

  getuno(nombre : string): Observable<Animal>{
    return this.http.get<Animal>(this.URLAnimal + nombre)
  }
  

}
