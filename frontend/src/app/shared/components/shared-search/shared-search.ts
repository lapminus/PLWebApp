import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared-search',
  imports: [FormsModule],
  templateUrl: './shared-search.html',
  styleUrl: './shared-search.scss',
})
export class SharedSearch {
  receivedPlaceholder = input('');
  searchSubmitted = output<string>();
  searchQuery = '';

  submitSearch() {
    this.searchSubmitted.emit(this.searchQuery.trim());
  }
}
