enum ReclamationLabel {
  Discuss = "discuss",
  Fraud = "fraud",
  Infos = "infos",
}

class Reclamation {
  _id!: string;
  userId!: string;
  recTitle!: string;
  recContent!: string;
  recLabel!: ReclamationLabel;
  recStatus!: { type: string; default: "Pending" };
  recEvent!: boolean;
  rectFormation!: boolean;
  showReplyField!: boolean;
  created_at!: Date;
  updated_at!: Date;

  constructor(
    _id: string,
    userId: string,
    recTitle: string,
    recContent: string,
    recLabel: ReclamationLabel,
    recStatus: { type: string; default: "Pending" }, // Update the type
    recEvent: boolean,
    showReplyField: boolean,
    rectFormation: boolean,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = _id;
    this.userId = userId;
    this.recTitle = recTitle;
    this.recContent = recContent;
    this.recLabel = recLabel;
    this.recStatus = recStatus;
    this.recEvent = recEvent;
    this.showReplyField = showReplyField;
    this.rectFormation = rectFormation;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Reclamation;
