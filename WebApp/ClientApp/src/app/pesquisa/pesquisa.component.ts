import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PesquisaService } from '../../app/Service/pesquisa.service';
import { IPesquisa } from '../Model/pesquisa.interface';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  public forecasts: IPesquisa = <IPesquisa>{};
  formLabel: string;
  form: FormGroup;

  constructor(private pesquisaService: PesquisaService, private fb: FormBuilder)
  {
    this.form = fb.group({
      valorPesquisa: ["", Validators.required]
    });

    this.formLabel = "Fazer pesquisa";
  }

  getPesquisa(id: string) {
    this.pesquisaService.getPesquisa(id).subscribe(
      (data: IPesquisa) => this.forecasts = { nome: data.nome },
      error => alert(error),
      () => console.log(this.forecasts.nome)
    );
  }

  ngOnInit() {
    
  }

  onSubmit() {
    var pesquisa = this.form.controls["valorPesquisa"].value;

    if (pesquisa === 1) {
      this.getPesquisa(pesquisa);
    }
    else if (pesquisa === 2) {
      this.getPesquisa(pesquisa);
    } else if (pesquisa === 3) {
      this.getPesquisa(pesquisa);
    }
    else {
      alert("Os valores aceitos para este campo são 1, 2 ou 3");
    }
  };

}
