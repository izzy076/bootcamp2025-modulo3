import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resgister',
  imports: [ReactiveFormsModule],
  templateUrl: './resgister.html',
  styleUrl: './resgister.css'
})
export class Resgister {

  registerForm = new FormGroup({
    name : new FormControl(''),
    username : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl<number | null>(null),
    password : new FormControl<string>('')
  })
}
