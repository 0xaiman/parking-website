import { Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { HistoryPageComponent } from './page/history-page/history-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'booking',
    component: BookingPageComponent,
  },
  {
    path: 'history',
    component: HistoryPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
