import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', component: HomeComponent },
  // {path: '' , component : HomeComponent} ,
  {path: 'home' , component : HomeComponent} ,
  {path: 'prodotti' , component : ProdottoComponent} ,
  {path: 'chiSiamo' , component : ChiSiamoComponent} ,

  {path:  '404', component: ErrorComponent},
  {path:'**' , redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
