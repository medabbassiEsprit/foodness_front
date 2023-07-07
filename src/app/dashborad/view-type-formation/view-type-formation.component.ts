import { Component, OnInit } from '@angular/core';
import { TypeFormation } from 'src/app/model/typeformation';
import { TypeFormationService } from 'src/app/layout/serices/typefromation.service';

@Component({
  selector: 'app-view-type-formation',
  templateUrl: './view-type-formation.component.html',
  styleUrls: ['./view-type-formation.component.css']
})
export class ViewTypeFormationComponent implements OnInit {

  formationList : TypeFormation[];
  openEdit: boolean = false;
  selectedFormation: TypeFormation;
  constructor(private TypeformationService: TypeFormationService) {
    this.selectedFormation = new TypeFormation();
  }

  ngOnInit(): void {
    this.refetch();
  }

  deleteFormation(Typeformation: TypeFormation): void {
    this.TypeformationService.deleteTypeFormation(Typeformation._id).subscribe(() => {
      this.refetch();
    });
  }

   openEditForm(Typeformation: TypeFormation) {
    console.log("clickded")
    this.selectedFormation = Typeformation;
    console.log(this.selectedFormation)

    this.openEdit = true;
  }
  refetch() {
    this.TypeformationService.getAllTypeFormation().subscribe({
      next: (data) => {
        this.formationList= data
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
    const removedF = new TypeFormation('' , '');
    this.selectedFormation = removedF;
    this.openEdit = false;
    this.refetch();
  }
}

