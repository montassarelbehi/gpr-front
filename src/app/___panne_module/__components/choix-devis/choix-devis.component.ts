import { Component, OnInit, ElementRef } from '@angular/core';
import { EnginService } from '../../../___engin_module/__services/engin/engin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PanneService } from '../../__services/panne-service/panne.service';
import { Devis } from '../../__model/devis';


@Component({
  selector: 'app-choix-devis',
  templateUrl: './choix-devis.component.html',
  styleUrls: ['./choix-devis.component.css'],
  providers: [PanneService]
})
export class ChoixDevisComponent implements OnInit {

  model: any = { };
  PanneIsSelected: boolean;
  pannesEnAttenteDevis: any;
  deviss: Devis[];


  constructor(private enginService: EnginService,
              private flashMessagesService: FlashMessagesService,
              private panneService: PanneService,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.PanneIsSelected = false;
    this.panneService.findAll().subscribe(
      (pannes) => { this.pannesEnAttenteDevis = pannes; },
      (error) => { this.flashMessagesService.show(error, {cssClass: 'alert-danger'}); }
    );
  }

  validate(reference) {
     console.log(reference);
    this.panneService.validateDevis(reference)
        .subscribe(
          (resp) => { }
        );
  }


  showDevis(reference) {
    this.checkIfMatriculeExists(reference);
  }

  checkIfMatriculeExists(reference) {
    this.deviss = null;
    this.panneService.findDevisByPanne(reference)
        .subscribe(
          (deviss) => { this.deviss = deviss;  },
          (error) => {
            this.flashMessagesService.show(error, {cssClass: 'alert-danger', timeout: 4000});
            this.PanneIsSelected = false;
          },
          () => {
              this.PanneIsSelected = true;
          }
    );
  }

  checkIfEnginRepaired(panne: any) {
    return panne.dateDebutReparation === undefined ? 'Non' : 'Oui';
  }

}
