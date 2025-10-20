import { Component } from '@angular/core';
// Formularios reactivos -> cada cosa que el usuario escriba sea reconocida por el sistema
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credencials } from '../../interfaces/credencials';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = new FormGroup({
    emailLogin: new FormControl(''),
    passwordLogin: new FormControl('')
  })


  // manejo de eventos
  handleSubmit(){
    const email = this.loginForm.value.emailLogin
    const password = this.loginForm.value.passwordLogin
    console.log(email, password)
    
    // const credencials : Credencials = {
    //   emailLogin : this.loginForm.value.emailLogin,
    //   passwordLogin : this.loginForm.value.passwordLogin
    // }

    // console.log('Credenciales para Login'. credencials);
    // Lógica de la petición al back de inicio de sesión
  }
}
