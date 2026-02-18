import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { SharedToast } from './shared/components/shared-toast/shared-toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SharedToast],
  template: `
    <app-header />
    <main><router-outlet /><app-shared-toast /></main>
  `,
  styles: `
    main {
      padding: 16px;
      color: yellow;
      background-color: #202c3f;
      min-height: calc(100vh - 64px);
    }
  `,
})
export class App {
  protected readonly title = signal('pl-frontend');
}
