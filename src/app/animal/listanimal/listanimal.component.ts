import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animalservice/animal.service';
import { Animal } from '../models/animal';


@Component({
  selector: 'app-listanimal',
  templateUrl: './listanimal.component.html',
  styleUrls: ['./listanimal.component.css']
})


export class ListanimalComponent implements OnInit {

  public animal: Array<any> = []


  constructor(private serviceanimal : AnimalService ) { 
    
    
  }

  nombre :string =""


  ngOnInit(): void {
  }

  ListAnimal(){

    
    this.serviceanimal.getAnimal().subscribe((result : Animal[])=>{
    console.log(result)
    this.animal = result
    
    });

  }

  buscar(){

    this.serviceanimal.getuno(this.nombre).subscribe(nuno => {
      console.log(nuno)
    })
  }

  
 

}
