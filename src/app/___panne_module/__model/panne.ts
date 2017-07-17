export class Panne {
    id: number;
    reference: string;
    matricule: string;
    dateOccurence: string;
    cause: string;
    description: string;
    dateDebutReparation: string;
    dateFinReparation: string;
    referenceFacture: string;
    dateCreationFacture: string;
    cout: number;

    constructor(reference: string, matricule: string, dateOccurence: string, cause: string, description: string,
                dateDebutReparation: string, dateFinReparation: string, referenceFacture: string,
                dateCreationFacture: string, cout: number) {
        this.reference = reference;
        this.matricule = matricule;
        this.dateOccurence = dateOccurence;
        this.cause = cause;
        this.description = description;
        this.dateDebutReparation = dateDebutReparation;
        this.dateFinReparation = dateFinReparation;
        this.referenceFacture = referenceFacture;
        this.dateCreationFacture = dateCreationFacture;
        this.cout = cout;
    }
}
