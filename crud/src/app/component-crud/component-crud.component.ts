import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component-crud.component.html',
  styleUrl: './component-crud.component.css'
})
export class ComponentCrudComponent {
  // Objeto de formulario
  formulario = new FormGroup({
    nome : new FormControl('',
      [Validators.required, Validators.minLength(3)]),

    idade : new FormControl(null,
      [Validators.required, Validators.min(0), Validators.max(120)]),

    cidade : new FormControl('',
      [Validators.required, Validators.minLength(3)]),
  })

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Vetor
  vetor:Pessoa[] = []

  // Armazenar indice da pessoa selecionada
  indice:number = -1

  // Função de cadastro
  cadastrar()
  {
    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visualizacao via console
    //console.table(this.vetor);

  }

  // Função de seleção
  selecionar(indice:number)
  {
    // Atribuir o indice da pessoa
    this.indice = indice;

    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    })

    // visibilidade dos botões
    this.btnCadastrar = false;
  }
}
