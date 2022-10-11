import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListanimalComponent } from './animal/listanimal/listanimal.component';
import { VeterinariaModule } from './veterinaria/veterinaria.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListanimalComponent,
    MenuComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VeterinariaModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
