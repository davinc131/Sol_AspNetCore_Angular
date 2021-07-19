import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmprestimoService } from '../../app/Service/emprestimo.service';
import { IEmprestimo } from '../Model/emprestimo.interface';
import { IEmprestimoResult } from '../Model/emprestimoresult.interface';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  emprestimo: IEmprestimo = <IEmprestimo>{};
  valor: string;

  //Formulário
  formLabel: string;
  form: FormGroup;

  constructor(private emprestimoService: EmprestimoService, private fb: FormBuilder)
  {
    this.form = fb.group({
      parcelas: ["", Validators.required],
      valorParcelas: ["", Validators.required]
    });

    this.formLabel = "Calcular valor de emprestimo";
  }

  postEmprestimo(emprestimo: IEmprestimo) {
    this.emprestimoService.postEmprestimo(emprestimo);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.emprestimo.parcelas = String(this.form.controls["parcelas"].value);
    this.emprestimo.valorParcelas = this.form.controls["valorParcelas"].value;
    this.emprestimo.valorEmprestimo = "";

    this.emprestimoService.postEmprestimo(this.emprestimo).subscribe(
      (data: IEmprestimo) => this.valor = data.valorEmprestimo
    );
  };
}
