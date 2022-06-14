import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
  constructor(private _http: HttpClient) {}

  async login(username: string, password: string): Promise<any> {
    let body =
      "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password) +
      "&grant_type=password&client_id=WS&client_secret=WS";
    var result = await this._http
      .post<any>(`api/v1/users/login`, body)
      .toPromise()
      .catch(err => {
        return err.error;
      });
    return result;
  }

  async getLoggedInUser(): Promise<any> {
    var result = await this._http.get<any>(`api/v1/users/me`).toPromise();
    return result;
  }
}
