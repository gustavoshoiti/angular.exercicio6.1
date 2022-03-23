import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-input',
  templateUrl: './t-input.component.html',
  styleUrls: ['./t-input.component.css']
})
export class TInputComponent implements OnInit {

  nome: string = ''
  sobrenome: string = ''
  apelido: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
