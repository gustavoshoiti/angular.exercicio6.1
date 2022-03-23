import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TInputComponent } from '../t-input/t-input.component';




@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent {
  title: string = 'Formulário de Inscrição'


  
  constructor (private dialog: MatDialog) {}

  name: string = ''
  lastname: string = ''
  username: string = ''
  cpf: string = ''
  phone: string = ''
  adress: string = ''
  complement: string = ''
  password: string = ''
  repeat: string = ''



  submit() {
    console.log(`O nome é: ${this.name}`)
    console.log(`O sobrenome é: ${this.lastname}`)
    console.log(`O username é: ${this.username}`)
    console.log(`O cpf é: ${this.cpf}`)
    console.log(`O telefone é: ${this.phone}`)
    console.log(`O endereço é: ${this.adress}`)
    console.log(`O complemento é: ${this.complement}`)
    console.log(`A senha é: ${this.password}`)

    let ref = this.dialog.open(TInputComponent)
    
    ref.componentInstance.nome = this.name
    ref.componentInstance.sobrenome = this.lastname
    ref.componentInstance.apelido = this.username
    ref.componentInstance.cpf = this.cpf
    ref.componentInstance.telefone = this.phone
    ref.componentInstance.endereco = this.adress

  }

  confirm(password:any,repeat:any):boolean {
    if (password === repeat){
      return false
    } else {
      return true
    }
  }
}


