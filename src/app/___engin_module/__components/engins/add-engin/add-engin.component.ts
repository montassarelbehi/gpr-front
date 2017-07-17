import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { Engin } from '../../../__models/engin';
import { EnginService } from '../../../__services/engin/engin.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Response } from '@angular/http';


declare var jQuery: any;

@Component({
  selector: 'app-add-engin',
  templateUrl: './add-engin.component.html',
  styleUrls: ['./add-engin.component.css'],
  providers: [EnginService]
})
export class AddEnginComponent implements OnInit {

  enginForm: FormGroup;
  engin: Engin;
  marques: any;
  modeles: any;
  types: any;
  etats: any;
  newMarqueAdded: boolean = false;
  newModeleAdded: boolean = false;

  // messages d'erreur pour chaque champs initialement vide
  formErrors = { 'matricule': '', 'marque': '', 'modele': '', 'type': '', 'etat': ''};
  // tous les messages de validation
  validationMessages = {
    'matricule': {
      'required': ' le matricule est requis',
    },
    'marque': {
      'required': 'la marque est requise'
    },
    'modele': {
      'required': 'le modele est requis'
    },
    'type': {
      'required': 'le type est requis'
    },
    'etat': {
      'required': 'l\'etat de l\'engin est requis'
    }
  };


  constructor(private formBuilder: FormBuilder,
              private enginService: EnginService,
              private router: Router,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.enginService.getAllMarques().subscribe(
      (res) => this.marques = res,
    );
    this.enginService.getAllModeles().subscribe(
      (res) => this.modeles = res,
    );
    this.enginService.getAllTypes().subscribe(
      (res) => this.types = res,
    );
    this.enginService.getAllEtats().subscribe(
      (res) => this.etats = res,
    );
    // initialisation de formulaire et l'aplication des validateur
    this.enginForm = this.formBuilder.group({
        matricule: [ '', [Validators.required] ],
        marque: [ '', [Validators.required] ],
        modele: [ '', [Validators.required] ],
        type: [ '', [Validators.required] ],
        etat: [ '', [Validators.required] ]
      });

    this.enginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.enginForm) { return; }
    const form = this.enginForm;

    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.enginForm.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }


  }

  onSubmit() {
    const engin = {
      'matricule': this.enginForm.get('matricule').value,
      'marque': this.enginForm.get('marque').value,
      'modele': this.enginForm.get('modele').value,
      'type': this.enginForm.get('type').value,
      'etat': this.enginForm.get('etat').value
    };
    const unknownError = 'une erreur est survenu lors de l\'ajout';
    const existErrorMsg = 'Engin avec la matricule ' + engin.matricule + ' existe déjà';
    const successMsg = 'engin ' + engin.matricule + ' a été mis a jour avec succés !';

    console.log(' - ', engin);
    this.enginService.add(engin).subscribe(
      // on success
      () => {
        this.flashMessagesService.show(successMsg, {cssClass: 'alert-success', timeout: 4000});
      },
      // error handling
      (error) => {
        if (error.status === 400) {
          this.flashMessagesService.show(unknownError, {cssClass: 'alert-info', timeout: 4000});
        } else if (error.status === 500 && error.type === 2) {
          this.flashMessagesService.show(existErrorMsg, {cssClass: 'alert-info', timeout: 4000});
        }
      },
      // on complete
      () => {
        this.router.navigate(['/engins']);
       }
    );
  }

  setModeles() {
    let filtredModeles;
    this.enginService.getAllModelesByMarque(this.enginForm.get('marque').value)
                    .subscribe(
                      modeles => filtredModeles = modeles,
                      () => { },
                      () => this.modeles = filtredModeles
                    );
  }

  showMarqueInputField() {
    this.newMarqueAdded = !this.newMarqueAdded;
  }

  hideMarqueInputField() {
    this.newMarqueAdded = !this.newMarqueAdded;
  }

  addMarque(value) {
    // TODO ws: ajouter marque
    // TODO ajouter la marque dans la selection courante
    this.newMarqueAdded = !this.newMarqueAdded;
  }

  showModeleInputField() {
    this.newModeleAdded = !this.newModeleAdded;
  }

  hideModeleInputField() {
    this.newModeleAdded = !this.newModeleAdded;
  }

  addModele(value) {
    // TODO ws: ajouter modele
    // TODO ajouter le modele dans la selection courante
    this.newModeleAdded = !this.newModeleAdded;
  }


}
