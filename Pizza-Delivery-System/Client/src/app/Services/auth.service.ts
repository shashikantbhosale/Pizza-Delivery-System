import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable()
export class AuthService {

    username!: string;
    tempPassword!: string;
    loggedInUser = new User();  
    auth_token: any = "";
    user_id: number = 0;
    isLogoutClicked: boolean = false;

    constructor(private _http: HttpClient) {

    }

    setAuthorizationToken(_token: string) {
        localStorage.removeItem("access_token");
        this.auth_token = _token;
        if (this.auth_token)
            localStorage.setItem("access_token", this.auth_token);
    }

    getAuthorizationToken() {
        if (this.auth_token == "")
            this.auth_token = localStorage.getItem("access_token");
        return this.auth_token ? this.auth_token : "";
    }


    setUserId(id: number) {
        localStorage.removeItem("id");
        this.user_id = id;
        localStorage.setItem("id", this.user_id + "");
    }

    getUserId() {
        if (this.loggedInUser && this.loggedInUser["Id"] == 0) {
            this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")|| '{}');
        }
        return this.loggedInUser.Id;
    }

    saveUser(_user: any) {
        // User
        localStorage.removeItem("loggedInUser");
        this.loggedInUser = _user;
        localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
    }

    getUser() {
        if (this.loggedInUser && this.loggedInUser["Id"] == 0) {
            this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")|| '{}');
        }
        return this.loggedInUser;
    }

    clearStorage() {
        this.loggedInUser = new User();
        this.auth_token = "";
        this.user_id = 0;
        localStorage.clear();
    }

    checkIfLoggedIn() {
        var token = this.getAuthorizationToken();
        if (token && token.length > 0) {
            return true;
        }
        return false;
    }

    getIsLogoutClicked(): boolean {
        return this.isLogoutClicked;
    }

    changeIsLogoutClicked(val: boolean) {
        this.isLogoutClicked = val;
    }

    async load(): Promise<any> {
        if (this.checkIfLoggedIn()) {
            return this._http.get("api/v1/users/me").toPromise()
        }
        else return new Promise((res: any, rej: any) => {
            rej({});
        });
    }

}
