export class Devis {



    id: number;
    cout: number;
    date_creation: string;
    fournisseur: string;
    matricule: string;
    reference: string;
    fichier: string;
    date_validation: string;
    path: string;
    panne: string;


    constructor(
        cout: number,
        date_creation: string,
        fournisseur: string,
        matricule: string,
        reference: string,
        fichier: string,
        date_validation: string,
        path: string,
        panne: string) {
        this.cout = cout;
        this.date_creation = date_creation;
        this.fournisseur = fournisseur;
        this.matricule = matricule;
        this.reference = reference;
        this.reference = reference;
        this.date_validation = date_validation;
        this.path = path;
        this.panne = panne;
    }
}
