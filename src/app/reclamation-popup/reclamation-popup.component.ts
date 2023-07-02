import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Reclamation from '../model/reclamation';
import { MatDialog } from '@angular/material/dialog';
import { ReplyServiceService } from '../reply-service.service';
import Reply from '../model/reply';

@Component({
  selector: 'app-reclamation-popup',
  templateUrl: './reclamation-popup.component.html',
  styles: []
})
export class ReclamationPopupComponent {
replyList:Reply[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public reclamation: Reclamation,private replyService:ReplyServiceService ) {}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.replyService.getReplies(this.reclamation.userId, this.reclamation._id).subscribe({
    next:(data)=>(this.replyList= data),
    error:(err)=>{
      console.error(err);
    },
    complete() {
        console.info('completed')
    },
  });

}
}
