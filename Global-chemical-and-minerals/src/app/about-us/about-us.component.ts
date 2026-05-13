import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  aboutImages = [
    { src: 'assets/about2.jpeg', alt: 'Global Chemicals and Minerals' },
    { src: 'assets/about1.jpeg', alt: 'Team Global Chemicals and Minerals' }
    // Add more images if you want!
  ];

  currentIndex = 0;

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.aboutImages.length) % this.aboutImages.length;
  }

  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.aboutImages.length;
  }
}
