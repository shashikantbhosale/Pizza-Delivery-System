import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../Models/User';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetails:User;
  submitted=false;
  confirmPassword: string = "";
  constructor(private _http: HttpClient,private _router:Router,
    private _authService: AuthService) {
    this.userDetails=new User();
   }

  ngOnInit(): void {
  }
register(isvalid: any){
  this.submitted = true;
 
  if(isvalid && this.confirmPassword==this.userDetails.Password){
    var url = environment.baseURL+"api/User/Save";
    this._http.post(url, this.userDetails)
    .subscribe((data: any) => {
  
       console.log(data);
       this._router.navigate(['/login']);
    }, err => {
      this._router.navigate(['/login']);
      if (err && err.status == 409) {
       
        //this._toastr.showError("Email ID already exists");
      }
      else {
       // this._toastr.showError("Unable to save user details");
      }
    })
  }
 
}


}
