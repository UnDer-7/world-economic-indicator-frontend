import { Component } from '@angular/core';
import { CountryService } from 'src/app/page/country/country.service';
import { LoadingService } from 'src/app/shared/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public readonly countryService: CountryService,
    public readonly loadingService: LoadingService,
  ) {
  }
  title = 'world-economic-indicator-frontend';
}
