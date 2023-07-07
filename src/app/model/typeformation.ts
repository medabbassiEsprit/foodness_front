export class TypeFormation {
  _id: string;
  libelle: string;

  constructor();
  constructor(_id: string, libelle: string);
  constructor(_id?: string, libelle?: string) {
    this._id = _id || '';
    this.libelle = libelle || '';
  }
}
