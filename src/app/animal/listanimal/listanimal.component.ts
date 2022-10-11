import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animalservice/animal.service';
import { Animal } from '../models/animal';
import { Color } from '../models/color';


@Component({
  selector: 'app-listanimal',
  templateUrl: './listanimal.component.html',
  styleUrls: ['./listanimal.component.css']
})


export class ListanimalComponent implements OnInit {
 //Variable que trae a todos los animales
  public animal: Array<any> = []
  public color: Array<any> = []

  //Variable con la cual realizamos el filtro por ID
  public buscar_input :string = ""



  //Pruebas

  public idcolor :string=""
  public numero = this.idcolor;

  //Variable de los atributos del animal
  public n_ficha: number=0
  public nombreA : string=""
  public sexo: string =""
  public especie: string =""
  public altura: string=""
  public nombre_color : string="";
  public n_microchip: string=""
  public raza: string=""
  
  

  constructor(private serviceanimal : AnimalService ) { 

  }

  
  ngOnInit(): void {
  }

  ListAnimal(){
    this.serviceanimal.getAnimal().subscribe((result : Animal[])=>{
    console.log(result)
    this.color = result
    
    });

  }

  ListColor(){
    this.serviceanimal.getColor().subscribe((result : Color[])=>{
    console.log(result)
    this.animal = result
    });

  }


  public buscar(){
      this.serviceanimal.getuno(this.buscar_input).subscribe((nuno : any) => {
      console.log(nuno) 

      this.n_ficha = nuno.animales.id_animal
      this.nombreA = nuno.animales.nombre
      this.sexo = nuno.animales.sexo
      this.especie = nuno.animales.especie

      this.idcolor = nuno.animales.color_id_color_id

      this.altura = nuno.animales.altura
      this.n_microchip = nuno.animales.n_microchip
      this.raza = nuno.animales.raza  
      this.numero = this.idcolor
      
      console.log(this.numero)

    })

  
  }
  

  public buscarcolor(){
    this.serviceanimal.getcolor(this.numero).subscribe((nuno1 :any)=>{
      console.log(nuno1)
      this.nombre_color = nuno1.colores.color
      console.log(this.nombre_color)
    })
  }



 

  
 

}
