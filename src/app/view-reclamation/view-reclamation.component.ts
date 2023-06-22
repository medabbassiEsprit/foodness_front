import { Component, OnInit } from '@angular/core';
import Reclamation from '../model/reclamation';
import { ReclamationService } from '../data/reclamation.service';

@Component({
  selector: 'app-view-reclamation',
  templateUrl: './view-reclamation.component.html',
  styleUrls: ['./view-reclamation.component.css']
})
export class ViewReclamationComponent implements OnInit {
  reclamationList: Reclamation[] = [];
  showReplyField: boolean = false;

  constructor(private reclamationConsumer: ReclamationService) {}

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

  toggleReplyField(): void {
    this.showReplyField = !this.showReplyField;
  }

}
