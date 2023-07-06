import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../data/reclamation.service';
import { ReclamationLabel } from '../model/reclamationLabel.enum';
import Reclamation from '../model/reclamation';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  recTitle: string = '';
  recContent: string = '';
  recLabel: ReclamationLabel = ReclamationLabel.Discuss;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const newReclamation: Reclamation = new Reclamation(
      '',
      '609c9c8f7e7d444abcc22c35', // Set the userId if necessary
      this.recTitle,
      this.recContent,
      this.recLabel,
      { type: 'Pending', default: 'Pending' }, // Update the argument for recStatus
      true,
      false, // Set the initial recEvent value if necessary
      false, // Set the initial rectFormation value if necessary
      new Date(),
      new Date()
    );

    this.reclamationService.createReclamation(newReclamation).subscribe(
      (response) => {
        console.log('Reclamation created successfully');
        // Handle any actions after the reclamation is created, such as displaying a success message or redirecting
      },
      (error) => {
        console.error('Error creating reclamation', error);
        // Handle any error scenarios, such as displaying an error message or logging the error
      }
    );
  }
}
