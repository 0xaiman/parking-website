import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import parkingData from '../parking-spot.json';

@Component({
  selector: 'app-parking-spot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-spot.component.html',
  styleUrl: './parking-spot.component.css',
})
export class ParkingSpotComponent {
  groundParkingSpots = parkingData.groundParkingSpots;
  oneParkingSpots = parkingData.oneParkingSpots;
  twoParkingSpots = parkingData.twoParkingSpots;
  threeParkingSpots = parkingData.threeParkingSpots;
  fourParkingSpots = parkingData.fourParkingSpots;
}
