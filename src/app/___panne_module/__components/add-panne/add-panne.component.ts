import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnginService } from '../../../___engin_module/__services/engin/engin.service';
import { PanneService } from '../../__services/panne-service/panne.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-panne',
  templateUrl: './add-panne.component.html',
  styleUrls: ['./add-panne.component.css'],
  providers: [EnginService, PanneService]
})
export class AddPanneComponent implements OnInit {

  model: any = {};

  constructor(private route: ActivatedRoute,
              private enginService: EnginService,
              private panneService: PanneService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    // change id with reference
    const id = this.route.snapshot.params['id'];
    this.enginService.getEnginById(id)
          .subscribe(engin => this.model.matricule = engin.matricule);
  }

  addPanne() {
    console.log(this.model);
    this.panneService.add(this.model).subscribe(
      resp => {
        this.flashMessagesService.show('Le panne a été signalé');
       },
      (error) => { }
    );
  }

}
