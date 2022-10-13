import { Component, OnInit } from '@angular/core';
import { Veterinaria } from '../models/veterinaria';
import { VeterinariaService } from '../vetiservice/veterinaria.service';

@Component({
  selector: 'app-listveti',
  templateUrl: './listveti.component.html',
  styleUrls: ['./listveti.component.css']
})
export class ListvetiComponent implements OnInit {

  constructor(private servicesveti:VeterinariaService) {

   }




   public veterinarias: Array<any> = []

  ngOnInit(): void {

    this.Listveti()

    this.servicesveti.getVeterinarias().subscribe(v => this.todas= v)

  }

  
  public todas: Array<any> = []


  //Variables
  public buscar_input:string="";



  Listveti(){
    this.servicesveti.getVeterinarias().subscribe((result : any)=>{

      this.todas = result.veterinarias

      console.log(this.todas)
      
    })
  }

  buscar(){
    this.servicesveti.getuno(this.buscar_input).subscribe((data : any)=>{
      console.log(data)
    })
  }


}
