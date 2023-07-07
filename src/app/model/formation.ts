export class Formation {
  _id: string;
  libelle: string;
  dateDebut: Date;
  dateFin: Date;
  refType: string;

  constructor();
  constructor(
    _id: string,
    libelle: string,
    dateDebut: Date,
    dateFin: Date,
    refType: string
  );
  constructor(
    _id?: string,
    libelle?: string,
    dateDebut?: Date,
    dateFin?: Date,
    refType?: string
  ) {
    this._id = _id || '';
    this.libelle = libelle || '';
    this.dateDebut = dateDebut || new Date();
    this.dateFin = dateFin || new Date();
    this.refType = refType || '';
  }
}
