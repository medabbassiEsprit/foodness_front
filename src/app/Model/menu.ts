class MenuPlat {
  _id!: string;
  NomduMenu!: string;
  Plats!: Array<any>; // Replace "any" with the appropriate type for references to the plates
  Description?: string;
  Prix!: number;
  imageUrl?: string; // Add the imageUrl field to the class

  constructor(
    _id: string,
    NomduMenu: string,
    Plats: Array<any>, // Replace "any" with the appropriate type for references to the plates
    Description: string,
    Prix: number,
    imageUrl?: string // Add the imageUrl parameter to the constructor
  ) {
    this._id = _id;
    this.NomduMenu = NomduMenu;
    this.Plats = Plats;
    this.Description = Description;
    this.Prix = Prix;
    this.imageUrl = imageUrl; // Assign the imageUrl parameter to the class property
  }
}

export default MenuPlat;
