import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl;

  // métodos para hacer las peticiones

  // Método POST
  // User: la estructura que debe tener al momento de enviar la petición de crear el usuario
  postUser(userToCreate : User){
    return this._httpClient.post(`${this.apiUrl}/users`, userToCreate);
  }
  
  // Método GET
  getUser(){
    return this._httpClient.get(`${this.apiUrl}/users`);
  }

  // Método PUT
  putUser(userToUpdate : User, id:string){
    return this._httpClient.put(`${this.apiUrl}/users/${id}`, userToUpdate);
  }

  // Método DELETE
  deleteUser(id:string){
    return this._httpClient.delete(`${this.apiUrl}/users/${id}`);
  }
  
}
