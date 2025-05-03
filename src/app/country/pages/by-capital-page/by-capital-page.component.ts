import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component'; // Importar
import { CountryListComponent } from '../../components/country-list/country-list.component'; // Importar
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

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
  countryService = inject(CountryService); // Inyectar el servicio

  isLoading = signal(false); // Variable para manejar el estado de carga
  isError = signal<string | null>(null); // Variable para manejar el estado de error
  countries = signal<Country[]>([]); // Variable para almacenar los países

  // Renombrar y adaptar el método para manejar la búsqueda
  searchByCapital(term: string): void {
    if (this.isLoading()) return;

    this.isLoading.set(true); // Activar el estado de carga
    this.isError.set(null); // Reiniciar el estado de error

    this.countryService.searchByCapital(term).subscribe({
      next: (countries) => {
        this.countries.set(countries); // Actualizar la lista de países
        this.isLoading.set(false); // Desactivar el estado de carga
      },
      error: (error) => {
        this.isError.set(error); // Manejar el error
        this.isLoading.set(false); // Desactivar el estado de carga
        this.countries.set([]); // Limpiar la lista de países
      },
    });
  }
}
