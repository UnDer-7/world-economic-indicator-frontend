import { Country } from 'src/app/page/country/country.model';

export interface Indicator {
  country: Country;
  date: string;
  value: number;
}
