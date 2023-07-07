import { Component, OnInit } from '@angular/core';
import { Formation } from '../../model/formation';
import { FormationService } from '../serices/formation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit {
  formationList: Formation[] = [];
  openEdit: boolean = false;
  selectedFormation: Formation;
  constructor(private formationService: FormationService) {
    this.selectedFormation = new Formation();
  }

  ngOnInit(): void {
    this.refetch();
  }

  deleteFormation(formation: Formation): void {
    this.formationService.deleteFormation(formation._id).subscribe(() => {
      this.refetch();
    });
  }
  openEditForm(formation: Formation) {
    this.selectedFormation = formation;
    this.openEdit = true;
  }
  refetch() {
    this.formationService.getFormations().subscribe({
      next: (data) => {
        this.formationList = data;
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
  closeEdit() {
    console.log('closeedit');
    const removedF = new Formation();
    this.selectedFormation = removedF;
    this.openEdit = false;
    this.refetch();
  }
}
