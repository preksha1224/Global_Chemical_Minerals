import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollTo(sectionId: string) {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (this.router.url === '/home' || this.router.url === '/') {
      if (isPlatformBrowser(this.platformId)) doScroll();
    } else {
      this.router.navigate(['/home']).then(() => {
        if (isPlatformBrowser(this.platformId)) setTimeout(doScroll, 250);
      });
    }
  }
}
