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
  reply: Reply | undefined;  // Update the type to a single Reply object

  constructor(
    @Inject(MAT_DIALOG_DATA) public reclamation: Reclamation,
    private replyService: ReplyServiceService
  ) {}

  ngOnInit(): void {
    this.replyService
      .getReplies(this.reclamation.userId, this.reclamation._id)
      .subscribe({
        next: (data) => {
          this.reply = data;  // Retrieve the first reply from the array
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        },
        complete() {
          console.info('completed');
        },
      });
  }

  deleteReclamation(): void {
    // Add your deletion logic here
    // For example, you can make a DELETE request to the server or perform any necessary actions
    // Once the deletion is complete, you can close the dialog if desired

  }
}
