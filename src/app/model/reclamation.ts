enum ReclamationLabel {
  Discuss = "discuss",
  Fraud = "fraud",
  Infos = "infos",
}

class Reclamation {
  userId!: string;
  recTitle!: string;
  recContent!: string;
  recLabel!: ReclamationLabel;
  recStatus!: string;
  recEvent!: boolean;
  rectFormation!: boolean;
  created_at!: Date;
  updated_at!: Date;

  constructor(
    userId: string,
    recTitle: string,
    recContent: string,
    recLabel: ReclamationLabel,
    recStatus: string,
    recEvent: boolean,
    rectFormation: boolean,
    created_at: Date,
    updated_at: Date
  ) {
    this.userId = userId;
    this.recTitle = recTitle;
    this.recContent = recContent;
    this.recLabel = recLabel;
    this.recStatus = recStatus;
    this.recEvent = recEvent;
    this.rectFormation = rectFormation;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Reclamation;
