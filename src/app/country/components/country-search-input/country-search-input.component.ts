import { Component, input, output } from '@angular/core'; // Importar 'input'

@Component({
  selector: 'app-country-search-input',
  standalone: true, // Hacer el componente standalone
  imports: [],
  templateUrl: './country-search-input.component.html',
  // No styleUrl
})
export class CountrySearchInputComponent {
  // Nueva propiedad de entrada para el placeholder
  public placeholder = input<string>('');

  // Usar la función output() en lugar del decorador @Output()
  public onSearch = output<string>();

  // Método para emitir el valor de búsqueda (sin cambios en la lógica)
  search(value: string): void {
    this.onSearch.emit(value);
  }
}
