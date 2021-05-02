import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/page/country/country.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/shared/model/pagina.model';
import { environment } from 'src/environments/environment';
import { Query } from 'src/app/shared/model/query.model';
import { Indicator } from 'src/app/page/country/Indicator.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly resourceUrl = `${ environment.apiEndpoint }/countries`;

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  listCountry(): Observable<Country[]> {
    return this.http.get<Page<Country>>(`${ this.resourceUrl }?pageSize=9999`)
      .pipe(
        map(({list}) => list)
      );
  }

  searchIndicatorByCountry(
    countryCode?: string,
    query: Query = { page: '1', pageSize: '10'}
  ): Observable<Page<Indicator>> {
    return this.http.get<Page<Indicator>>(
      `${this.resourceUrl}/indicators/${countryCode}`,
      { params: new HttpParams({
          fromObject: query,
        }) }
    );
  }
}
