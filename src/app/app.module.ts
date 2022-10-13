import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListanimalComponent } from './animal/listanimal/listanimal.component';
import { MenuComponent } from './menu/menu.component';
import { ListvetiComponent } from './veterinaria/listveti/listveti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListanimalComponent,
    MenuComponent,
    ListvetiComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
