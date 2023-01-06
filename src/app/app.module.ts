import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncioComponent } from './pages/incio/incio.component';
import { HeaderComponent } from './layout/header/header.component';
import { BtnWspComponent } from './layout/btn-wsp/btn-wsp.component';
import { HttpClientModule } from '@angular/common/http';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { RedesComponent } from './layout/redes/redes.component';






@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    HeaderComponent,
    BtnWspComponent,
    PortafolioComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
