import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPesquisa } from '../Model/pesquisa.interface';
import {fromEvent, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService
{
  constructor(private http: HttpClient)
  {

  }

  getPesquisa(id: string): Observable<IPesquisa> {
    var result = this.http.get<IPesquisa>('http://localhost:15741/api/Home/Pesquisar?pValorPesquisa=' + id);
    return result;
  }
}
