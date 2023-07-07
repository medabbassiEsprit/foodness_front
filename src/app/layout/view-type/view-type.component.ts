import { Component, OnInit } from '@angular/core';
import { FormationService } from '../serices/formation.service';
import { Formation } from 'src/app/model/formation';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent implements OnInit {
  formationList: Formation[] = [];
  refTypes: string[] = [];
  selectedRefType: string = '';
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations().subscribe(formations => {
      this.formationList = formations;
      this.refTypes = this.getRefTypes(formations);
    });
  }

  getRefTypes(formations: Formation[]): string[] {
    const refTypes = new Set<string>();
    formations.forEach(formation => refTypes.add(formation.refType));
    return Array.from(refTypes);
  }

  get filteredFormations(): Formation[] {
    if (this.selectedRefType) {
      return this.formationList.filter(formation => formation.refType === this.selectedRefType);
    } else {
      return this.formationList;
    }
  }
}
