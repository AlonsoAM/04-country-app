import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { Routes } from '@angular/router';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        loadComponent: () =>
          import('./pages/by-capital-page/by-capital-page.component').then(
            (m) => m.ByCapitalPageComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
