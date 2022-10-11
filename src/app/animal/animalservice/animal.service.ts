import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  URLAnimal :  string = 'http://127.0.0.1:8000/app_animal/animal/';
  URLcolor : string = "http://127.0.0.1:8000/app_color/color/";

  constructor(private http : HttpClient) { }

  getAnimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.URLAnimal);

  }
  getColor(): Observable<Color[]>{
    return this.http.get<Color[]>(this.URLcolor)
  }

  getuno(nombre : string){
    return this.http.get<Animal>(this.URLAnimal + nombre)
  }
  
  getcolor(color : string){
    return this.http.get<Color>(this.URLcolor + color)
  }

  
}
