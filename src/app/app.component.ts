import { Component } from '@angular/core';
import { CountryService } from 'src/app/page/country/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public readonly countryService: CountryService,
  ) {
  }
  title = 'world-economic-indicator-frontend';
}
