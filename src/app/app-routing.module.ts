import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './pages/incio/incio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {path:'',component: IncioComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},

  {path:'productos/:filtro', component: PortafolioComponent},
  {path:'productos', component: PortafolioComponent},
  {path:'acercade', component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
