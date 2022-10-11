import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListanimalComponent } from './animal/listanimal/listanimal.component';
import { MenuComponent } from './menu/menu.component';
import { ListveterinariaComponent } from './veterinaria/listveterinaria/listveterinaria.component';

const routes: Routes = [

  {
    path:'animal',
    component:ListanimalComponent

  },

  {

    path:'veterinaria',
    component:ListveterinariaComponent

  },
  {

    path:'menu',
    component:MenuComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
