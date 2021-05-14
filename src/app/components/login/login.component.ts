import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  onSubmit() {
    if((this.credentials.username != '' && this.credentials.password != '') 
    && (this.credentials.username != null && this.credentials.password != null)){
      console.log("Nós temos que submeter o formulário ao servidor");
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          //Sucesso
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href = "/digitacao"
          console.log("Chegou aqui");
          // window.location.href = "/dashboard"
        },
        error => {
          //Erro
          console.log("Não chegou aqui");
          console.log(error);    
        }
      )
    } else {
      console.log("Campos vazios.");
    }
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
