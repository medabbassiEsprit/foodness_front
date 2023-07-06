import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReclamationComponent } from 'src/app/add-reclamation/add-reclamation.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {


  constructor(  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(): void {
    console.log();
    const dialogRef = this.dialog.open(AddReclamationComponent, {
      width: '600px',
      height: '75%',

    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the pop-up dialog is closed
    });
  }

}
