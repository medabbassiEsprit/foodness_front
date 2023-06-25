import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Reclamation from '../model/reclamation';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reclamation-popup',
  template: `

    <!-- Add any additional content or functionality here -->
  `,
  styles: []
})
export class ReclamationPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public reclamation: Reclamation) {}
}
