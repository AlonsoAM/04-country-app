import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  // static RestCountry => Country
  static fromRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital ? restCountry.capital[0] : 'N/A',
      population: restCountry.population,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg, // o restCountry.flags.png
    };
  }

  // static RestCouutry[] => Country[]
  static fromRestCountryArrayToCountryArray(
    restCountries: RESTCountry[]
  ): Country[] {
    return restCountries.map(CountryMapper.fromRestCountryToCountry);
  }
}
