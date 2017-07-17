
export class Engin {
  id: number;
  type: string;
  matricule: string;
  marque: string;
  modele: string;
  etat: string;

  constructor(id: number,
              matricule: string,
              marque: string,
              modele: string,
              type: string,
              etat: string) {
    this.id = id;
    this.matricule = matricule;
    this.marque = marque;
    this.modele = modele;
    this.type = type;
    this.etat = etat;
  }
}
