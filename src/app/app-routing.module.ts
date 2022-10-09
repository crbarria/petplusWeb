import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListanimalComponent } from './animal/listanimal/listanimal.component';
import { ListveterinariaComponent } from './veterinaria/listveterinaria/listveterinaria.component';

const routes: Routes = [

  {
    path:'animal',
    component:ListanimalComponent

  },

  {

    path:'veterinaria',
    component:ListveterinariaComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
