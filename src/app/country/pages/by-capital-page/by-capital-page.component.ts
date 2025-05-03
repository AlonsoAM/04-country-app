import { Component, inject } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component'; // Importar
import { CountryListComponent } from '../../components/country-list/country-list.component'; // Importar
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true, // Asegurarse que sea standalone
  imports: [
    CountrySearchInputComponent, // Añadir a imports
    CountryListComponent, // Añadir a imports
  ],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  public countries: any[] = []; // Añadir propiedad para la lista de países

  countryService = inject(CountryService); // Inyectar el servicio

  // Renombrar y adaptar el método para manejar la búsqueda
  searchByCapital(term: string): void {
    console.log('Buscando por capital:', term);
    // Llamar al servicio y suscribirse para obtener la respuesta
    this.countryService.searchByCapital(term).subscribe((countries) => {
      console.log('Respuesta del servicio:', countries);
      // Aquí también actualizarías this.countries si fuera necesario
      // this.countries = countries;
    });
  }
}
