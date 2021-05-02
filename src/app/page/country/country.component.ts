import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from 'src/app/page/country/country.service';
import { Country } from 'src/app/page/country/country.model';
import { Page } from 'src/app/shared/model/pagina.model';
import { Indicator } from 'src/app/page/country/Indicator.model';
import { filter } from 'rxjs/operators';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  countrySelect: Country | null = null;
  isDialogOpen = true;
  indicadorPage: Page<Indicator> = {
    page: 0,
    pageTotal: 0,
    pageSize: 0,
    total: 0,
    list: [],
  };

  @ViewChild('paginator', { static: true })
  paginator!: Paginator;

  constructor(
    private readonly countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
    this.countryService.listCountry()
      .subscribe(countries => this.countries = countries);
    this.countryService.$newCountry
      .pipe(
        filter(newCountry => newCountry)
      )
      .subscribe(newCountry => this.isDialogOpen = newCountry);
  }

  get tooltipText(): string {
    if (!this.countrySelect) {
      return 'Selecione um país para buscar';
    }

    return '';
  }

  onCountrySelected(): void {
    this.countryService.searchIndicatorByCountry(this.countrySelect?.id)
      .subscribe(indicador => {
        this.isDialogOpen = false;
        this.indicadorPage = indicador;
      });
  }

  onPageChange({ page, rows }: { first: number, page: number, pageCount: number, rows: number }): void {
    const pageAdded = page + 1;
    this.countryService.searchIndicatorByCountry(this.countrySelect?.id, {
      page: pageAdded.toString(),
      pageSize: rows?.toString(),
    }).subscribe(indicator => this.indicadorPage = indicator);
  }
}
