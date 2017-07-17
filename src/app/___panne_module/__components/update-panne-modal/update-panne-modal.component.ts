import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Panne } from '../../__model/panne';
import { PanneService } from '../../__services/panne-service/panne.service';
import { FormBuilder, FormGroup, FormControl, Validators, Validator, AbstractControl} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-update-panne-modal',
  templateUrl: './update-panne-modal.component.html',
  styleUrls: ['./update-panne-modal.component.css']
})
export class UpdatePanneModalComponent implements OnInit, OnChanges {

 
  // engin qui va etre modifier doit etre passer par l'element pere 'app-list-engin' || 'app-detail-engin'
  @Input() selectedPanne: Panne;
  // instance d'un forme group qui va controler notre formulaire de la MAJ
  panneForm: FormGroup;
  pannes: Panne[];

  constructor(private formbuilder: FormBuilder,private panneService: PanneService,
              private flashMessagesService: FlashMessagesService) {  
  // initialisation du formulaire a vide et creation du Form Model 'model du formulaire'
  this.createForm();}

                // validation properties
  formErrors = {'reference': '', 'matricule': '', 'dateOccurence': '', 'cause': '', 'description': ''};
  validationMessages = {
    'reference': {
      'required': 'la reference est obligatoire',
    },
    'matricule': {
      'required': 'le matricule est obligatoire'
    },
    'dateOccurence': {
      'required': 'la date occurence est obligatoire'
    },
    'cause': {
      'required': 'la cause est obligatoire'
    },
    'description': {
      'required': 'la description est obligatoire'
    }
  };

  ngOnInit() {
    this.panneService.findAll().subscribe(
      (pannes) => { this.pannes = pannes; },
      (error) => { this.flashMessagesService.show(error, {cssClass: 'alert-danger'}); }
    );
  }


ngOnChanges() {
    this.panneForm.reset({
      reference: this.selectedPanne.reference,
      matricule: this.selectedPanne.matricule,
      dateOccurence : this.selectedPanne.dateOccurence,
      cause: this.selectedPanne.cause,
      description: this.selectedPanne.description
    });

    this.panneForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages
  }





  createForm() {
    this.panneForm = this.formbuilder.group({
      reference: ['', [Validators.required] ],
      matricule: ['', [Validators.required ]],
      dateOccurence: ['', [Validators.required ]],
      cause: ['', [Validators.required] ],
      description: ['', [Validators.required] ]
    });

  }

  onValueChanged(data?: any) {
    if (!this.panneForm) { return; }
    const form = this.panneForm;

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
