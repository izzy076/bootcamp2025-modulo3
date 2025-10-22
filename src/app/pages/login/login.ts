import { Component, inject } from '@angular/core';
// Formularios reactivos -> cada cosa que el usuario escriba sea reconocida por el sistema
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credencials } from '../../interfaces/credencials';
import { LoginService } from '../../services/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Variables e injección de servicios
  private _loginService = inject(LoginService);

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  // manejo de eventos
  handleSubmit() {
    // const email = this.loginForm.value.emailLogin
    // const password = this.loginForm.value.passwordLogin
    // console.log(email, password)

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); //poder agregar estilos -> marcamos todos los imputs como activados
      return; //pare acá y no siga
    }

    const credencials: Credencials = {
      emailLogin: this.loginForm.value.emailLogin || '',
      passwordLogin: this.loginForm.value.passwordLogin || ''
    }

    console.log('Credenciales para Login', credencials);
    // Lógica de la petición al back de inicio de sesión
    this._loginService.Login(credencials).subscribe({
      // manejo de la respuesta o error
      next: (res: any) => {
        console.log(res);
        if (res) {
          // Guardar el token en el Local Storage
          localStorage.setItem('token', res.token);

          // mensaje de respuesta
          Swal.fire({
            title: "supeeer!",
            text: res.mensaje,
            icon: "success",
            draggable: true
          });
          // redirección
          this._loginService.redirectTo();
        }
      },
      error: (err: any) => {
        console.error(err.error.mensaje);
        Swal.fire({
          title: "Ooops!",
          text: err.error.mensaje,
          icon: "error",
          draggable: true
        });
      }

    });
  }
}

