import { Component, OnInit } from '@angular/core';
import Reclamation from '../model/reclamation';
import { ReplyServiceService } from '../reply-service.service';
import { ReclamationService } from '../data/reclamation.service';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationPopupComponent } from '../reclamation-popup/reclamation-popup.component';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
  reclamationList: Reclamation[] = [];

  constructor(
    private reclamationConsumer: ReclamationService,
    private replyConsumer: ReplyServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reclamationConsumer
      .getReclamationByUserId('609c9c8f7e7d444abcc22c35')
      .subscribe({
        next: (data) => (this.reclamationList = data),
        error: (err) => {
          console.error(err);
        },
        complete() {
          console.info('completed');
        }
      });
  }

  openPopup(reclamation: Reclamation): void {
    console.log(reclamation);
    const dialogRef = this.dialog.open(ReclamationPopupComponent, {
      width: '600px',
      height: '75%',
      data: reclamation
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the pop-up dialog is closed
    });
  }

  deleteReclamation(reclamation: Reclamation): void {
    this.reclamationConsumer.deleteReclamation(reclamation._id).subscribe(
      (response) => {
        console.log('Reclamation deleted successfully');
        // Remove the deleted reclamation from the reclamationList
        this.reclamationList = this.reclamationList.filter(
          (item) => item._id !== reclamation._id
        );
      },
      (error) => {
        console.error('Error deleting reclamation', error);
      }
    );
  }
}
