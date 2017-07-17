import { Component, Input } from '@angular/core';
import { Engin } from '../../../__models/engin';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-detail-engin-modal',
  templateUrl: './detail-engin-modal.component.html',
  styleUrls: ['./detail-engin-modal.component.css']
})
export class DetailEnginModalComponent {

  @Input() selectedEngin: Engin;

  constructor(private router: Router) { }

  signalerPanne(id) {
    jQuery('#detail-engin-modal').modal('hide');
    this.router.navigate(['/engins/' + id + '/ajout-panne']);
  }

}
