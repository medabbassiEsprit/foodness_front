import { Component, OnInit } from '@angular/core';
import { OffreApiService } from '../../data/offre-api.service';
import { Offre } from '../../model/Offre';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
})
export class OffreComponent implements OnInit {
  ListOffres: Offre[] = [];
  openAdd: boolean = false;

  constructor(private offreApiService: OffreApiService) {}

  ngOnInit(): void { 
    this.refresh();
  }
  refresh() {
    this.offreApiService.getOffres().subscribe((data) => {
      console.log(data);
      this.ListOffres = data;
    });
  }
  ajouterOffre() {
    this.openAdd = true;
  }
  offreAdded() {
    this.openAdd = false;
    this.refresh();
  }
  delete(id) {
    console.log(id);
    this.offreApiService.delete(id).subscribe(() => this.refresh());
  }
}
