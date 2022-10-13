import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListanimalComponent } from './animal/listanimal/listanimal.component';
import { MenuComponent } from './menu/menu.component';
import { ListvetiComponent } from './veterinaria/listveti/listveti.component';

const routes: Routes = [

  {
    path:'animal',
    component:ListanimalComponent

  },
  {

    path:'menu',
    component:MenuComponent

  },
  {
    path:'veterinaria',
    component:ListvetiComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
