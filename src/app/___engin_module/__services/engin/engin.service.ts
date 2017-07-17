import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Engin } from '../../__models/engin';
import { Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServerConfig } from '../../../___common_module/server-config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class EnginService {

  private headers: Headers;


  constructor(private http: Http,
              private flashMessagesService: FlashMessagesService) {
    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json; charset=utf-8');
  }

  getAll(): Observable<Engin[]> {
    return this.http.get(ServerConfig.SERVER + '/engin/findAll')
        .map(res => res.json());
  }

  add(engin) {
    return this.http.post(ServerConfig.SERVER + '/engin/add', JSON.stringify(engin), {headers: this.headers})
            .map(res => { res.json(); console.log(res); } );
  }

  update(engin) {
    return this.http.put(ServerConfig.SERVER + '/engin/update', JSON.stringify(engin), {headers: this.headers})
            .map(res => res.json());
  }

  getEnginById(id) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/id/' + id)
          .map(resp => resp.json());
  }

  getEnginByMatricule(matricule) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/matricule/' + matricule)
                    .map(res => res.json());
  }

  getEnginByMatriculeAndEtat(matricule, etat) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/matricule/' + matricule + '/etat/' + etat)
                  .map(resp => resp.json());
  }

  getEnginDetails(id) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/id/' + id)
                    .map(res => res.json());
  }

  getAllTypes() {
    return this.http.get(ServerConfig.SERVER + '/engin/getAllTypes')
                    .map(res => res.json());
  }

  getAllEtats() {
    return this.http.get(ServerConfig.SERVER + '/engin/getAllEtats')
                    .map(res => res.json());
  }

  /*************************** ENGIN INFORMATION SERVICE**********************/
  getAllMarques() {
    return this.http.get(ServerConfig.SERVER + '/engin/getAllMarques')
                    .map(res => res.json());
  }

  getAllModeles() {
    return this.http.get(ServerConfig.SERVER + '/engin/getAllModeles')
                    .map(res => res.json());
  }

  getAllModelesByMarque(marque) {
    return this.http.get(ServerConfig.SERVER + '/engin/getModelesByMarque/' + marque)
                    .map(res => res.json());
  }


}
