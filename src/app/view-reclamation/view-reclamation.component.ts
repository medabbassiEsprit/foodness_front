import { Component, OnInit } from '@angular/core';
import Reclamation from '../model/reclamation';
import { ReclamationService } from '../data/reclamation.service';
import { ReplyServiceService } from '../reply-service.service';
import Reply from '../model/reply';

@Component({
  selector: 'app-view-reclamation',
  templateUrl: './view-reclamation.component.html',
  styleUrls: ['./view-reclamation.component.css']
})
export class ViewReclamationComponent implements OnInit {
  reclamationList: Reclamation[] = [];
  showReplyField: boolean = false;

  constructor(private reclamationConsumer: ReclamationService, private replyConsumer:ReplyServiceService) {}

  ngOnInit(): void {
    this.reclamationConsumer.getAllReclamations().subscribe({
      next: (data) => (this.reclamationList = data),
      error: (err) => {
        console.error(err);
      },
      complete() {
        console.info('completed');
      }
    });
    this.replyContentList = this.reclamationList.map(() => '');
  }

  updateStatus(item: Reclamation): void {
    this.reclamationConsumer.updateReclamationStatus(item._id, item.recStatus).subscribe({
      next: () => {
        console.log('Status updated successfully.');
        this.reclamationConsumer.getAllReclamations().subscribe({
          next: (data) => (this.reclamationList = data),
          error: (err) => {
            console.error(err);
          },
          complete() {
            console.info('completed');
          }
        });
      },
      error: (err) => {
        console.error('Failed to update status:', err);
      }
    });
  }

  updateLabel(item: Reclamation): void {
    this.reclamationConsumer.updateReclamationLabel(item._id, item.recLabel).subscribe({
      next: () => {
        console.log('Label updated successfully.');
        this.reclamationConsumer.getAllReclamations().subscribe({
          next: (data) => (this.reclamationList = data),
          error: (err) => {
            console.error(err);
          },
          complete() {
            console.info('completed');
          }
        });
      },
      error: (err) => {
        console.error('Failed to update label:', err);
      }
    });
  }
  replyContentList: string[] = [];
  submitReply(item: Reclamation, index: number): void {
    const replyContent = this.replyContentList[index];
    const reply: Reply = new Reply('', item.userId, item._id, replyContent, new Date(), new Date());
    this.replyConsumer.addReply(reply).subscribe({
      next: (response) => {
        console.log('Reply added successfully:', response);

      },
      error: (err) => {
        console.error('Failed to add reply:', err);
      }
    });
  }


}
