class Reply{

  _id!:string;
  userId!:string;
  recId!:string;
  resContent!:string;
  created_at!:Date;
  updated_at!:Date;
constructor(
_id:string,
  userId:string,
  recId:string,
  resContent:string,
  created_at:Date,
  updated_at:Date
){
  this._id=_id;
  this.userId=userId;
  this.recId= recId;
  this.resContent=resContent;
  this.created_at=created_at;
  this.updated_at=updated_at
}
}
export default Reply;
