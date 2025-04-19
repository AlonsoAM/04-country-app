import { Component } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';

@Component({
  selector: 'app-by-pais-page',
  standalone: true,
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-pais-page.component.html',
  styles: ``,
})
export class ByPaisPageComponent {
  searchByCountry(term: string): void {
    console.log('Buscando por pais:', term);
    // Aquí iría la lógica para llamar al servicio y actualizar this.countries
  }
}
