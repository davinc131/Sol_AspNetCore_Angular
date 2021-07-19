import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmprestimo } from '../Model/emprestimo.interface';
import { IEmprestimoResult } from '../Model/emprestimoresult.interface';
import { fromEvent, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(private http: HttpClient) { }

  postEmprestimo(pEmprestimo: IEmprestimo): Observable<IEmprestimo>
  {
    return this.http.post<IEmprestimo>('http://localhost:15741/api/Home/CalculaEmprestimo', pEmprestimo);
  }
}
