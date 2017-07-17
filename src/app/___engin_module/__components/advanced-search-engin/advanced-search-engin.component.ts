import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnginService } from '../../__services/engin/engin.service';
import { Engin } from '../../__models/engin';
import { EnginSearchParams } from '../../__business/engin-search-params';


@Component({
  selector: 'app-advanced-search-engin',
  templateUrl: './advanced-search-engin.component.html',
  styleUrls: ['./advanced-search-engin.component.css'],
  providers: [EnginService]
})
export class AdvancedSearchEnginComponent implements OnInit {
    _allModeles: any;

  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  marques: any;
  modeles: any;
  types: any;
  etats: any;

  // search parameters
  selectedMarque;
  selectedType;
  selectedModele;
  selectedEtat;
  searchParams: EnginSearchParams;

  constructor(private enginService: EnginService) {

  }

  ngOnInit() {
    this.enginService.getAllMarques().subscribe(marques => this.marques = marques);
    this.enginService.getAllModeles().subscribe(modeles => { this.modeles = this._allModeles = modeles ; });
    this.enginService.getAllTypes().subscribe(types => this.types = types);
    this.enginService.getAllEtats().subscribe(etats => this.etats = etats);
  }

  setToDefault() {
    this.selectedMarque = this.selectedModele = this.selectedType = this.selectedEtat = null;
  }

  setModeles() {
    this.enginService.getAllModelesByMarque(this.selectedMarque).subscribe(filtredModeles => this.modeles = filtredModeles);
  }

  searchByParams(searchByParams: boolean) {
    // TODO verification du validite des champs
    if (searchByParams) {
      this.send.emit({ marque: this.selectedMarque, type: this.selectedType,
                      modele: this.selectedModele, etat: this.selectedEtat });
    } else {
      this.modeles = this._allModeles;
      this.send.emit({ marque: this.selectedMarque = null, type: this.selectedType = null,
                       modele: this.selectedModele = null, etat: this.selectedEtat = null });
    }
  }
}

