import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
//import { Toastr } from '../services/toastr.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  validate: boolean = false;
  saving: boolean = false;
  isNotValidCredentials: boolean = false;

  constructor(private _loginService: LoginService, private _router: Router,
     private _authService: AuthService) { }

  ngOnInit() {

  }

  async login(isvalid: any) {
   this.validate=true;
   if(isvalid){
    let result = await this._loginService.login(this.username, this.password);
    if (result && !result.error) {
      this.setAuthData(result);
      //this._toastr.success("Login successfully");
      this._router.navigate(['/pizza-home']);
    }
    else if (!result || result.error) {
      this.isNotValidCredentials = true;
       // this._toastr.showError("Unable to login");
      }
   }
     
  }

  async setAuthData(result:any) {
    this._authService.setAuthorizationToken(result.access_token);
    this._authService.changeIsLogoutClicked(false);
    this._authService.saveUser(result);
  }

}
