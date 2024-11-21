import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-busca-deputados',
  templateUrl: './busca-deputados.component.html',
  styleUrl: './busca-deputados.component.css'
})
export class BuscaDeputadosComponent {
  formBusca: FormGroup
  deputado: Deputado[] | undefined 
  constructor(private fb: FormBuilder, 
              private fs: DeputadoService
  ) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, 
                    Validators.minLength(2)]
              ]
    })

    this.deputado = undefined
  }
  buscar() {
    const nome = this.formBusca.value.nome
    this.fs.buscarDeputadoPorTitulo(nome).subscribe(
      res => {
        this.deputado = res.dados 
      }
    )
  }
}
