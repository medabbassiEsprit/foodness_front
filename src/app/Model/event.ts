export class Event {
  _id!: string;
  Titre!: string;
  emplacementEvent!: string;
  description!: string;
  dateDeb!: Date;
  dateFin!: Date;
  organisateur!: string;
  dateCreation!: Date;
  dateModif!: Date;
  nbrParticipants!: number;
  idUsers!: string[];
  refImage!: string;
  imageId!: string[];
  name!: string;
  typeName!: string;
  type!: string; // Add the 'type' property

}
