import { Component, OnInit, OnChanges, Input, Injectable } from '@angular/core';
import {EnginService} from '../../../__services/engin/engin.service';
import { Router } from '@angular/router';
import { Engin } from '../../../__models/engin';
import { AdvancedSearchEnginService } from '../../../__services/advanced-search-engin/advanced-search-engin.service';
import { Observable } from 'rxjs/Observable';
import { AdvancedSearchEnginComponent } from '../../advanced-search-engin/advanced-search-engin.component';
import { DetailEnginModalComponent } from '../detail-engin-modal/detail-engin-modal.component';
import { UpdateEnginModalComponent } from '../update-engin-modal/update-engin-modal.component';
import { FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../../___common_module/__services/shared-services/shared.service';



declare var jQuery: any;


@Component({
  selector: 'app-list-engin',
  templateUrl: './list-engin.component.html',
  styleUrls: ['./list-engin.component.css'],
  providers: [EnginService, AdvancedSearchEnginService]
})
export class ListEnginComponent implements OnInit {

   searchBoxMatricule: string;
  // liste de toutes les engins represantant le dataTable
  engins: Engin[];
  // engin selectionne pour le detail ou l'update
  selectedEnginForUpdate: Engin;
  selectedEnginForDetail: Engin;
  // liste des engins filtré aprés la recherche avancée
  enginsFiltre: Engin[];
  enginByMatricule: Engin[];


  constructor(private enginService: EnginService,
              private advancedSearchEnginService: AdvancedSearchEnginService,
              private router: Router,
              private flashMessagesService: FlashMessagesService,
              private sharedService: SharedService) {
    this.engins = new Array();
    this.enginsFiltre = new Array();
  }

  ngOnInit() {
      this.enginService.getAll().subscribe( (res) => this.engins = res );

  }
/*
  searchByMatricule(searchBoxMatricule: string) {
    console.log('called with ', searchBoxMatricule);
    this.enginService.getEnginByMatricule(searchBoxMatricule).subscribe(
      (enginByMatricule) => { this.enginsFiltre = enginByMatricule; console.log(this.enginsFiltre); },
      (err) => console.log('error has occured when searching by matricule: fetching'),
      () => { this.engins = this.enginsFiltre; console.log(this.engins); }
    );
    // jQuery('#retablir-btn').trigger('click');
    console.log('ended');
  }
*/
  showDetailModal(engin: Engin) {
    this.selectedEnginForDetail = engin;
  }

  showUpdateModal(engin: Engin) {
    this.selectedEnginForUpdate = engin;
  }

  addEngin(engin: Engin) {

  }


  suspendreEngin(enginToUpdate: Engin) {
    this.enginService.update(enginToUpdate).subscribe(
      () => { },
      (error) => console.log('error occured while updating engin: suspendreEngin()'),
      () => {  }
    );
    this.flashMessagesService.show('L\'engin a éte suspendu !', {cssClass: 'alert-info', timeout: 4000});
  }

  onSend(searchParams: any) {
    const matricule = this.sharedService.matricule;
    const marque = searchParams.marque;
    const type = searchParams.type;
    const modele = searchParams.modele;
    const etat = searchParams.etat;

    /*************************** IF SEARCH BY MATRICULE ******************************/

    if (matricule != null) {
      this.enginService.getEnginByMatricule(matricule).subscribe(
        (engin) => {
          this.engins = this.enginsFiltre = [];
          this.enginsFiltre.push(engin);
        },
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => {
            this.engins = this.enginsFiltre;
            this.enginsFiltre = [];
          }
        );
      this.sharedService.matricule = null;
      return;
    }

    /*************************** IF ALL NULL RETURN ALL ******************************/
    if ( (marque === null) && (type === null) && (modele === null) && (etat === null)) {
      this.enginService.getAll().subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
      return;
    }

    /****************** 4  SEARCH  PARAMS ***********************************/
    if ( (marque != null) && (type != null) && (modele != null) && (etat != null) ) {
        this.advancedSearchEnginService.getEnginsByMarqueAndTypeAndModeleAndEtat(marque, type, modele, etat).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    // ****************** 3  SEARCH  PARAMS ***********************************
    if ((etat != null) && (marque != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByEtatAndMarqueAndModele(etat, marque, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return ;
    }

    if ((type != null) && (marque != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByTypeAndMarqueAndModele(type, marque, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((type != null) && (etat != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByTypeAndEtatAndModele(type, etat, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((type != null) && (etat != null) && (marque != null)) {
        this.advancedSearchEnginService.getEnginsByTypeAndEtatAndMarque(type, etat, marque).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    // ****************** 2  SEARCH  PARAMS ***********************************
    if ((marque != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByMarqueAndModele(marque, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((etat != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByEtatAndModele(etat, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((etat != null) && (marque != null)) {
        this.advancedSearchEnginService.getEnginsByEtatAndMarque(etat, marque).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((type != null) && (modele != null)) {
        this.advancedSearchEnginService.getEnginsByTypeAndModele(type, modele).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((type != null) && (marque != null)) {
        this.advancedSearchEnginService.getEnginsByTypeAndMarque(type, marque).subscribe(
          (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }

    if ((type != null) && (etat != null)) {
      this.advancedSearchEnginService.getEnginsByTypeAndEtat(type, etat).subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
        return;
    }


    // ****************** ONE  SEARCH  PARAM ***********************************
    if ( (marque != null) && (marque.trim() !== '') ) {
      this.advancedSearchEnginService.getEnginsByMarque(marque).subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
      return;
    }

    if (type != null) {
      this.advancedSearchEnginService.getEnginsByType(type).subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
      return;
    }

    if ( (modele != null) && (modele.trim() !== '') ) {
      this.advancedSearchEnginService.getEnginsByModele(modele).subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
      return;
    }

    if (etat != null) {
      this.advancedSearchEnginService.getEnginsByEtat(etat).subscribe(
        (liste) => this.enginsFiltre = liste,
          // failure callback
          (err) => console.log('error occured while fetching filtered engins'),
          // complete callback
          () => this.engins = this.enginsFiltre
        );
      return;
    }
  }

 searchByMatricule() {
    console.log(' - call from navbar');
    this.sharedService.matricule = this.searchBoxMatricule;
    jQuery('#advanced-search-btn').trigger('click');
  }

   setAdvancedSearchPanelVisibility() {
    // navigate to the list engin component
    this.router.navigate(['/engins']);
    setTimeout(function() {
      document.getElementById('advancedSearchPanel').style.display = 'inline';
      // jQuery('#advancedSearchPanel').slideToggle();
    }, 0);
  }
}
