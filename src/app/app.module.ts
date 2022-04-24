import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { PruebasPipeComponent } from './pruebas-pipe/pruebas-pipe.component';
import { ArchivonuevogitComponent } from './archivonuevogit/archivonuevogit.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    PruebasPipeComponent,
    ArchivonuevogitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
