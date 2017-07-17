import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServerConfig } from '../../../___common_module/server-config';


@Injectable()
export class PanneService {
  headers: Headers;

  constructor(private http: Http,
              private flashMessagesService: FlashMessagesService) {
    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json; charset=utf-8');
  }

  findAll() {
    return this.http.get(ServerConfig.SERVER + '/panne/findAll').map(resp => resp.json());
  }

  add(panne) {
    return this.http.post(ServerConfig.SERVER + '/panne/add', JSON.stringify(panne), {headers: this.headers})
        .map(resp => resp.json());
  }

  findDevisByPanne(reference) {
    return this.http.get(ServerConfig.SERVER + '/devis/find/panne/' + reference)
        .map(resp => resp.json());
  }

  validateDevis(reference) {
    return this.http.post(ServerConfig.SERVER + '/devis/' + reference + '/validate', reference, {headers: this.headers})
        .map(resp => resp.json());
  }

}
