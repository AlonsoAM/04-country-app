import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component'; // Importar
import { CountryListComponent } from '../../components/country-list/country-list.component'; // Importar

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

  // Renombrar y adaptar el método para manejar la búsqueda
  searchByCapital(term: string): void {
    console.log('Buscando por capital:', term);
    // Aquí iría la lógica para llamar al servicio y actualizar this.countries
  }
}
