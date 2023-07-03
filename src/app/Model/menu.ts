class MenuPlat {
  _id!:string;
     NomduMenu!: string;
    Plats!: Array<any>; // Remplacer "any" par le type approprié pour les références aux plats
    Description?: string;
    Prix!: number;
    constructor(
    _id:string,
    NomduMenu : string,
    Plats: Array<any>, // Remplacer "any" par le type approprié pour les références aux plats
    Description: string,
    Prix: number,
    ) {
    this._id=_id;
    this.NomduMenu=NomduMenu;
    this.Plats=Plats;
    this.Description=Description;
    this.Prix=Prix;
    }
  } 
  export default MenuPlat;