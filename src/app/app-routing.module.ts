import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './pages/incio/incio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {path:'',title:'Home | Fmd' ,component: IncioComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},

  {path:'productos/:filtro',title:'Products | Fmd' ,component: PortafolioComponent},
  {path:'productos', title:'Products | Fmd' ,component: PortafolioComponent},
  {path:'acercade', title:'About | Fmd' ,component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
