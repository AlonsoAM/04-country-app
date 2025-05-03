import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(term: string): Observable<Country[]> {
    term = term.trim().toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${term}`).pipe(
      map(CountryMapper.fromRestCountryArrayToCountryArray) // Mapear la respuesta a un array de Country
    );
  }
}
