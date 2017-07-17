import { Component, OnInit } from '@angular/core';
import { Panne } from '../../__model/panne';
import { PanneService } from '../../__services/panne-service/panne.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-list-panne',
  templateUrl: './list-panne.component.html',
  styleUrls: ['./list-panne.component.css'],
  providers: [PanneService]
})
export class ListPanneComponent implements OnInit {

  selectedPanneForDetail: any;
  pannes: Panne[];

  constructor(private panneService: PanneService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.panneService.findAll().subscribe(
      (pannes) => { this.pannes = pannes; },
      (error) => { this.flashMessagesService.show(error, {cssClass: 'alert-danger'}); }
    );
  }

  checkIfEnginRepaired(panne: any) {
    return panne.reparation === null ? 'Non' : 'Oui';
  }

  showDetailModal(panne) {
    this.selectedPanneForDetail = panne;
    console.log(panne);
  }

   showUpdateModal(panne) {
    this.selectedPanneForDetail = panne;
    console.log(panne);
  }

    showAddDevisModal(panne) {
    this.selectedPanneForDetail = panne;
    console.log(panne);
  }
  

}
