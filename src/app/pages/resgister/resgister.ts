import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import Swal from 'sweetalert2';
import { UserService } from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  imports: [ReactiveFormsModule],
  templateUrl: './resgister.html',
  styleUrl: './resgister.css'
})
export class Resgister {

  private _userService = inject(UserService);
  private _router = inject(Router)

  registerForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    age : new FormControl<number | null>(null), //campo opcional
    password : new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/)
  });

  handleSubmit(){
    
    const userData : User = {
      _id : '',
      name : this.registerForm.value.name || '',
      username : this.registerForm.value.username || '',
      email: this.registerForm.value.email || '',
      age : this.registerForm.value.age || 0,
      password : this.registerForm.value.password || '',
      role : "user"
  }
   console.log("Datos del usuario: ", userData);

    this._userService.postUser(userData).subscribe({
      next : (res:any)=> {
        console.log(res);
        Swal.fire({
          title : "Bien!",
          text : res.mensaje,
          icon : "success"
        }).then(()=>{
          this._router.navigate(['/login']);
        })
        
      },
      error : (err:any) => {
        console.error(err.error.mensaje);
        Swal.fire({
          title : "Oops!",
          text: err.error.mensaje,
          icon: "error"
        })
      }
    });

  }

}
