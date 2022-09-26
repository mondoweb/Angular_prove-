import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondoCompComponent } from './secondo-comp/secondo-comp.component';
import { MenuComponent } from './menu/menu.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LimitaTestoPipe } from './limita-testo.pipe';
import { FirstLetterPipe } from './first-letter.pipe';
import { ProdottiService } from './prodotti.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoCompComponent,
    MenuComponent,
    ChiSiamoComponent,
    ProdottoComponent,
    LoginComponent,
    FooterComponent,
    LimitaTestoPipe,
    FirstLetterPipe,
    HomeComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdottiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
