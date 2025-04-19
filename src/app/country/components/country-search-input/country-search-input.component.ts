import { Component, ElementRef, input, output, ViewChild } from '@angular/core'; // Importar ElementRef y ViewChild

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

  // Obtener referencia al input usando ViewChild
  @ViewChild('txtSearch')
  public searchInput!: ElementRef<HTMLInputElement>;

  // Método para emitir el valor de búsqueda
  search(value: string): void {
    this.onSearch.emit(value);
    // Limpiar el input
    this.searchInput.nativeElement.value = '';
    // Devolver el foco al input
    this.searchInput.nativeElement.focus();
  }
}
