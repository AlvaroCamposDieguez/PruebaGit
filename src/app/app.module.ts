import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { PruebasPipeComponent } from './pruebas-pipe/pruebas-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    PruebasPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
