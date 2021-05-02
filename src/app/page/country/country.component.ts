import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/page/country/country.service';
import { Country } from 'src/app/page/country/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  countrySelect: Country | null = null;
  isDialogOpen = true;

  constructor(
    private readonly countryService: CountryService,
  ) {
  }

  get tooltipText(): string {
    if (!this.countrySelect) {
      return 'Selecione um país para buscar';
    }

    return '';
  }

  ngOnInit(): void {
    this.countryService.listCountry()
      .subscribe(countries => this.countries = countries);
  }

  onCountrySelected(): void {
    this.countryService.searchIndicatorByCountry(this.countrySelect?.id)
      .subscribe(indicador => {
        console.log('INDICA: ', indicador);
        this.isDialogOpen = false;
      });
  }
}
