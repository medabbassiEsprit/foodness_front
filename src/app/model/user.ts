import role from "./role";

export enum status {
  Pending = "Pending",
  Active = "Active"
}
export enum sexe {
  Femme = "Femme",
  Homme = "Homme",
  Others = "Others"
}

class User {
  _id!: string;
  username!: string;
  email!: string;
  password!: string;
  roles!: role;
  profileImage!: string;
  bio!: string;
  verifAssociation!: boolean;
  file!: string;
  avatar!: string;
  status !: status;
  verificationToken !: string;
  adress !:String;
  profesion !:String;
  dateNaissance !: Date;
  numTel !:Number;
  ville !:String ;
  codePostal !:Number;
  sexe !: sexe;
}


export default User ;
