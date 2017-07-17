import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Validator, AbstractControl} from '@angular/forms';
import { Engin } from '../../../__models/engin';
import { EnginService } from '../../../__services/engin/engin.service';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { Response } from '@angular/http';

declare var jQuery: any;

@Component({
  selector: 'app-update-engin-modal',
  templateUrl: './update-engin-modal.component.html',
  styleUrls: ['./update-engin-modal.component.css']
})
export class UpdateEnginModalComponent implements OnInit, OnChanges {
    _updateSuccess: boolean;
    _updateErrorHasOccured: boolean;
  // engin qui va etre modifier doit etre passer par l'element pere 'app-list-engin' || 'app-detail-engin'
  @Input() selectedEngin: Engin;
  // instance d'un forme group qui va controler notre formulaire de la MAJ
  enginForm: FormGroup;
  // TODO recuperation des enumerations de la base;
  marques: string[];
  modeles: string[];
  types: string[];
  etats: string[];
  // validation properties
  formErrors = {'matricule': '', 'marque': '', 'modele': '', 'type': '', 'etat': ''};
  validationMessages = {
    'matricule': {
      'required': 'le matricule est obligatoire',
    },
    'marque': {
      'required': 'la marque est obligatoire'
    },
    'modele': {
      'required': 'le modele est obligatoire'
    },
    'type': {
      'required': 'type engin est obligatoire'
    },
    'etat': {
      'required': 'etat est obligatoire'
    }
  };


constructor(private formbuilder: FormBuilder,
            private enginService: EnginService,
            private flashMessagesService: FlashMessagesService) {
  // initialisation du formulaire a vide et creation du Form Model 'model du formulaire'
  this.createForm();
}

ngOnInit() {
  this.enginService.getAllMarques()
                  .subscribe( marques => this.marques = marques);
  this.enginService.getAllModeles()
                  .subscribe(modeles => this.modeles = modeles);
  this.enginService.getAllEtats()
                  .subscribe( (etats) => this.etats = etats);
  this.enginService.getAllTypes()
                    .subscribe(types => this.types = types);
}

ngOnChanges() {
    this.enginForm.reset({
      matricule: this.selectedEngin.matricule,
      marque: this.selectedEngin.marque,
      modele : this.selectedEngin.modele,
      etat: this.selectedEngin.etat,
      type: this.selectedEngin.type
    });

    this.enginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages
  }

  onSubmit(id) {
    const engin = {
      'id': id,
      'matricule': this.enginForm.get('matricule').value,
      'marque': this.enginForm.get('marque').value,
      'modele': this.enginForm.get('modele').value,
      'type': this.enginForm.get('type').value,
      'etat': this.enginForm.get('etat').value
    };
    const errorMsg = 'Engin avec la matricule ' + engin.matricule + ' existe déjà';
    const successMsg = 'engin ' + engin.matricule + ' a été mis a jour avec succés !';

    this.enginService.update(engin).subscribe(
      // on success
      () => {
        console.log(' - flash message starting...');
        this.flashMessagesService.show(successMsg, { cssClass: 'alert-success', timeout: 4000});
        console.log(' - flash message is started and update is done with success');
      },
      // error handling
      (error) => {
        if (error.status === 500 && error.type === 2) {
          this.flashMessagesService.show(errorMsg, {cssClass: 'alert-info', timeout: 4000});
          console.log(' - an error has occured');
        }
      },
      // on complete
      () => {
        console.log(' - update is complete and hinding modal and refreshing view');
        jQuery('#update-engin-modal').modal('hide');
        jQuery('#retablir-btn').trigger('click');
       }
    );

  }

  createForm() {
    this.enginForm = this.formbuilder.group({
      matricule: ['', [Validators.required] ],
      marque: ['', [Validators.required ]],
      modele: ['', [Validators.required ]],
      etat: ['', [Validators.required] ],
      type: ['', [Validators.required] ]
    });

  }

  onValueChanged(data?: any) {
    if (!this.enginForm) { return; }
    const form = this.enginForm;

    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      // clear previous error messages
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }




}
