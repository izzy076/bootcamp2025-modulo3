import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencials } from '../interfaces/credencials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode'; //para decodificar el token y poder saber si inicio sesion un admin o no
import { Router } from '@angular/router'; //para redireccionar a otras paginas al iniciar sesión

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // 1.Inyectar y definir variables
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private apiUrl = environment.appUrl;

  // 2. Desarrollar la lógica del servicio

  // La petición POST
  Login(loginCredentials: Credencials) {
    return this._httpClient.post(`${this.apiUrl}/login`, loginCredentials);
  }

  // Decirle al navegador de donde va a obtener el token
  getToken() {
    // viene del LocalStorage -> almacenamiento temporal
    return localStorage.getItem("token"); //obtenemos el token
  }

  // Validar si el rol de administrador o no
  // este método retorno TRUE o FALSE -> dependiendo de si es administrador o no
  isAdmin(){
    // primero necesitamos ontener el token
    const token = this.getToken();

    // en caso de que sí haya token, decodifiquelo
    if(token){
      const decoded : any = jwtDecode(token); 
      return decoded.admin === true ? true : false;

    }else{
      console.log("No se encontró el token");
      return false;
    }
  }

  // Redirección una vez que ya inició sesión
  redirectTo(){
  // si es administador, que redireccione a /admin
  if(this.isAdmin()){
    this._router.navigate(["/dashboard"]);
  } else {
    this._router.navigate(["/"]);
  }
}

// Cierre de sesión
Logout(){
  localStorage.removeItem("token");
  alert("Cierre de sesión exitoso, Vuelve pronto!");
  this._router.navigate(["/login"]);
}

// Saber si se inició sesión o no
isLoggedIn(){
  return this.getToken() ? true : false;
}//si no hay token, no esta logueado, si sí lo hay, entonces sí inició sesión
}
