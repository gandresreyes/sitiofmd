import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './pages/incio/incio.component';

const routes: Routes = [
  {path:'',component: IncioComponent},
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
