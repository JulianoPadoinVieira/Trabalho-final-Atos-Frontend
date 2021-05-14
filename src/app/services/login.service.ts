import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8085"

  constructor(private http: HttpClient) { }

  //Chamando o servidor para gerar o token
  generateToken(credentials: any){
    //Gerador do token
    return this.http.post(`${this.url}/token`, credentials);
  }

  //Para o login do usuário
  loginUser(token) {
    localStorage.setItem("token", token)
    return true;
  }

  //Para checar se está logado
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if(token == undefined || token === '' || token == null  ){
      return false;
    } else {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token')
    return true;
  }

  //Para pegar o token
  getToken() {
    return localStorage.getItem("token");
  }
}
