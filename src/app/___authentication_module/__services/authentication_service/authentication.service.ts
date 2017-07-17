import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  _URL = 'http://localhost:8080/';
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post(this._URL + 'users/authenticate', JSON.stringify({nom: username, mdp: password}))
        .map((res: Response) => {
          // success authentication and login ==> l'utilisateur peut acceder a ses fonctionalite
          const user = res.json();
          if (user && user.token) { // l'objet retourner doit avoir un attricut token correspondant a l'utilisateur
            // store user details and jwt in localStorage to keep user logged in in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        });
  }

  logout() {
    // remove user from localStorage to log user out
    localStorage.removeItem('currentUser');
  }

  register(user) {
    return this.http.post(this._URL + 'users/register', JSON.stringify(user))
          .map((resp: Response) => resp.json());
  }

}
