import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatInputModule,BrowserAnimationsModule
  ],
  providers: [],
  exports:[MatInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
