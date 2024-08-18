import { Component } from '@angular/core';
import { BookingFormComponent } from '../../component/booking-form/booking-form.component';
import { ParkingSpotComponent } from '../../component/parking-spot/parking-spot.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [BookingFormComponent, ParkingSpotComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css',
})
export class BookingPageComponent {}
