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



  //Obtener color

  public idcolor :string=""
  public numero = this.idcolor;
  public nombre_color : string="";


  //Obtener sexo

  public idsexo :string=""
  public numerosexo = this.idsexo;
  public nombre_sexo :string="";

  //Obetener la especie

  public idespecie:string=""
  public numeroespecie = this.idespecie;
  public nombreespecie :string="";

  //Obtener la raza

  public idraza:string=""
  public numeroraza = this.idraza;
  public nombreraza :string="";


  //Obtener el estado

  public idestado:string=""
  public numeroestado = this.idestado;
  public nombre_estado:string=""; 


  //Obtener el dueno

  public iddueno:string=""
  public numerodueno = this.iddueno;
  public nombre_dueno:string="";

  //Variable de los atributos del animal
  public n_ficha: number=0
  public nombreA : string=""
  public n_microchip: string=""
  public raza: string=""
  
  

  constructor(private serviceanimal : AnimalService ) { 

  }

  
  ngOnInit(): void {
  }


 //------------------------------- TESTEO ------------------------------------ 
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
//---------------------------------- FIN TESTEO -------------------------------



  //nuno hace referencia al nombre de la variable que almacena la data

  public buscar(){
      this.serviceanimal.getuno(this.buscar_input).subscribe((nuno : any) => {
      console.log(nuno) 

      //Datos propios del array list
      this.n_ficha = nuno.animales.id_animal
      this.nombreA = nuno.animales.nombre
      this.n_microchip = nuno.animales.n_microchip


      //Datos que se obtienen gracias a las foraenas en la BD
      this.idsexo = nuno.animales.sexo_id_sexo_id
      this.idcolor = nuno.animales.color_id_color_id
      this.idespecie = nuno.animales.especie_id_especie_id
      this.idestado = nuno.animales.estado_id_estado_id
      this.iddueno = nuno.animales.dueno_id_dueno_id
      
      //Almaceno la informaicon de la id en una variable
      this.numero = this.idcolor
      this.numerosexo = this.idsexo
      this.numeroespecie = this.idespecie
      this.numeroestado = this.idestado
      this.numerodueno = this.iddueno
      
      //Ejecuto las funciones al mismo tiempo que busco el animal
      this.buscarcolor()
      this.buscarsexo()
      this.buscarespecie()
      this.buscarestado()
      this.buscardueno()
    })

  
  }
  

  //Busco los atributos del animal por separado
  public buscarcolor(){
    this.serviceanimal.getcolor(this.numero).subscribe((nuno1 :any)=>{
      this.nombre_color = nuno1.colores.color
    })
  }

  public buscarsexo(){
    this.serviceanimal.getsexo(this.numerosexo).subscribe((nuno2 :any)=>{
      this.nombre_sexo = nuno2.sexos.sexo
    })
  }

  public buscarespecie(){
    this.serviceanimal.getespecie(this.numeroespecie).subscribe((nuno3 : any)=>{
      this.nombreespecie = nuno3.especies.nombre_especie
      
    })
  }

  public buscarestado(){
    this.serviceanimal.getestado(this.numeroestado).subscribe((nuno4 :  any)=>{
      this.nombre_estado = nuno4.estados.estado

    })
  }

  public buscardueno(){
    this.serviceanimal.getdueno(this.numerodueno).subscribe((nuno5 : any)=>{
      this.nombre_dueno = nuno5.dueno.nombre_completo
    })
  }
  


 

  
 

}
