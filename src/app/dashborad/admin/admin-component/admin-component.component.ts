import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {
  isItemClicked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleContainerClass(): void {
    this.isItemClicked = !this.isItemClicked;
  }

  navigateToReclamationList(): void {
    this.isItemClicked = true;
    this.router.navigate(['/reclamation']);
  }
}
