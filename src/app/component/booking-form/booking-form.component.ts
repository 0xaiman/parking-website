import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  private apiUrl = environment.apiUrl;

  applyForm = new FormGroup({
    parkingPlan: new FormControl(''),
    parkingNumber: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    carBrand: new FormControl(''),
    plateNumber: new FormControl(''),
  });

  carBrandsList = [
    'Toyota',
    'Honda',
    'Nissan',
    'Perodua',
    'Proton',
    'Kia',
    'Mitsubishi',
    'Ford',
    'Mazda',
    'Lexus',
  ];

  parkingPlan = ['Weekly', 'Monthly'];

  constructor(private http: HttpClient) {}

  submitApplication() {
    const formData = this.applyForm.value;

    this.http
      .post(`${this.apiUrl}/submit-booking`, formData)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return of(null); // Handle the error and return an observable
        })
      )
      .subscribe((response) => {
        console.log('Server response:', response);
        alert('Form submitted successfully!');
      });
  }
}
