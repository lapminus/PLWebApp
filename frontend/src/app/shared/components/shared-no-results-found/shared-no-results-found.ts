import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-no-results-found',
  imports: [],
  templateUrl: './shared-no-results-found.html',
  styleUrl: './shared-no-results-found.scss',
})
export class SharedNoResultsFound {
  receivedQuery = input.required<string | number>();
}
