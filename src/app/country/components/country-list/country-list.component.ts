import { Component, input } from '@angular/core'; // Importar 'input' y quitar 'Input'
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngFor

@Component({
  selector: 'app-country-list',
  standalone: true, // Hacer el componente standalone
  imports: [CommonModule], // Importar CommonModule
  templateUrl: './country-list.component.html',
  // No styleUrl
})
export class CountryListComponent {
  // Usar la función input() en lugar del decorador @Input()
  public countries = input<any[]>([]); // Añadir Input para recibir países (usar interfaz si existe)
}
