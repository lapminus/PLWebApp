import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { inject as injectAnalytics } from '@vercel/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private router = inject(Router);

  constructor() {
    // Initialize Vercel Analytics
    injectAnalytics();
    
    // Track route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Analytics are automatically tracked by Vercel's script
      // This subscription is here for potential custom tracking needs
    });
  }
}
