import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Engin } from '../../__models/engin';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServerConfig } from '../../../___common_module/server-config';


@Injectable()
export class AdvancedSearchEnginService {

  constructor(private http: Http) { }






//  *************************** MIXED ********************************
  getEnginsByMarque(marque) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/marque/' + marque)
                    .map( res => res.json() );
  }

  getEnginsByType(type) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type)
                    .map(res => res.json());
  }

  getEnginsByModele(modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/modele/' + modele)
                    .map( res => res.json());
  }

  getEnginsByEtat(etat) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/etat/' + etat)
                    .map( res => res.json());
  }

  getEnginsByTypeAndEtat(type, etat) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/etat/' + etat)
    .map( res => res.json());
  }

  getEnginsByTypeAndMarque(type, marque) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/marque/' + marque)
    .map( res => res.json());
  }

  getEnginsByTypeAndModele(type, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByEtatAndMarque(etat, marque) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/etat/' + etat + '/marque/' + marque)
    .map( res => res.json());
  }

  getEnginsByEtatAndModele(etat, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/etat/' + etat + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByMarqueAndModele(marque, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/marque/' + marque + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByTypeAndEtatAndMarque(type, etat, marque) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/etat/' + etat + '/marque/' + marque)
    .map( res => res.json());
  }

  getEnginsByTypeAndEtatAndModele(type, etat, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/etat/' + etat + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByTypeAndMarqueAndModele(type, marque, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/type/' + type + '/marque/' + marque + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByEtatAndMarqueAndModele(etat, marque, modele) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/etat/' + etat + '/marque/' + marque + '/modele/' + modele)
    .map( res => res.json());
  }

  getEnginsByMarqueAndTypeAndModeleAndEtat(marque, type, modele, etat) {
    return this.http.get(ServerConfig.SERVER + '/engin/find/marque/' + marque + '/type/' + type + '/modele/' + modele + '/etat/' + etat)
                    .map( res => res.json());
  }



  // ******************** END MIXED ****************************
}


