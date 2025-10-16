import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-navbar', //Etiqueta de html
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private _loginservice = inject(LoginService);
  isVisible : boolean = this._loginservice.isAdmin();
}
