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
        // Nueva ruta para by-pais (original)
        path: 'by-country',
        loadComponent: () =>
          import('./pages/by-pais-page/by-pais-page.component').then(
            (m) => m.ByPaisPageComponent
          ),
      },
      {
        // Nueva ruta para la página de país por código
        path: 'by-country/:code', // Cambiado de :id a :code
        loadComponent: () =>
          import('./pages/country-page/country-page.component').then(
            (m) => m.CountryPageComponent
          ),
      },
      {
        // Nueva ruta para by-region
        path: 'by-region',
        loadComponent: () =>
          import('./pages/by-region-page/by-region-page.component').then(
            (m) => m.ByRegionPageComponent
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
