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
    const dialogRef = this.dialog.open(ReclamationPopupComponent, {
      width: '600px',
      data: reclamation
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the pop-up dialog is closed
    });
  }
}
