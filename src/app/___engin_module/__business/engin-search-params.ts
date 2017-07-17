export class EnginSearchParams {
    type: string;
    etat: string;
    modele: string;
    marque: string;

    constructor(type: string, etat: string, modele: string, marque: string) {
        this.type = type;
        this.etat = etat;
        this.modele = modele;
        this.marque = marque;
    }
}
