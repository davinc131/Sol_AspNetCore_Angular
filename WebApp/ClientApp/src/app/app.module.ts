import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { PesquisaService } from './Service/pesquisa.service';
import { EmprestimoService } from './Service/emprestimo.service';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PesquisaComponent,
    EmprestimoComponent,
    //CounterComponent,
    //FetchDataComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent }
      { path: 'pesquisa', component: PesquisaComponent },
      { path: 'emprestimo', component: EmprestimoComponent }
    ])
  ],
  providers: [
    PesquisaService,
    EmprestimoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
