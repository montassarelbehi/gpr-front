import { Component, OnInit, Input } from '@angular/core';
import { Panne } from '../../__model/panne';
import { PanneService } from '../../__services/panne-service/panne.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-detail-panne-modal',
  templateUrl: './detail-panne-modal.component.html',
  styleUrls: ['./detail-panne-modal.component.css']
})
export class DetailPanneModalComponent implements OnInit {

  @Input() selectedPanne: any;
  pannes: Panne[];

  constructor(private panneService: PanneService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.panneService.findAll().subscribe(
      (pannes) => { this.pannes = pannes; },
      (error) => { this.flashMessagesService.show(error, {cssClass: 'alert-danger'}); }
    );
  }

  checkIfEnginRepaired() {
    console.log(' -rep:', this.selectedPanne);
    return this.selectedPanne.reparation === null ? 'Non' : 'Oui';
  }

}
