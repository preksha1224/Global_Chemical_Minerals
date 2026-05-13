import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('companyVideo') companyVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  isPlaying = false;
  isMuted = false;
  cardActive: string | null = null;

  togglePlay(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute(video: HTMLVideoElement) {
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }

  carouselImages: string[] = [
    'assets/GlobalCM.png',
    'assets/GlobalCM1.png',
    'assets/GlobalCM3.png'
  ];

  currentIndex: number = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.carouselImages.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser && this.companyVideo) {
      // Only run in the browser
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.companyVideo.nativeElement.play();
            } else {
              this.companyVideo.nativeElement.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(this.companyVideo.nativeElement);
    }
  }

  scrollCarousel(direction: number) {
    const el = this.carousel?.nativeElement;
    if (el) {
      const scrollAmount = el.offsetWidth * 0.7; 
      el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
modalProduct: any = null;

openProductModal(product: any) {
  this.modalProduct = product;
}

closeProductModal() {
  this.modalProduct = null;
}
  products = [
    {
      image: 'assets/Global_damproof.jpg',
      title: 'GLOBAL SMART HOME CARE DAMP PROOF',
      description: 'GLOBAL Smart Home Care Damp Proof is a quick-drying, easy-to-apply solution that protects surfaces from damp, mold, and mildew by creating a strong waterproof barrier.'
    },
    {
      image: 'assets/Global_Acrylic_Primer.jpg',
      title: 'Global ACRYLIC PRIMER',
      description: 'Global Acrylic Primer ensures flawless adhesion and a smooth, durable base for any surface'
    },
    {
      image: 'assets/Global_Acrylic_Distemper.jpg',
      title: 'GLOBAL ACRYLIC DISTEMPER',
      description: 'Transform your walls with the enduring brilliance of Global Acrylic Distemper – where vibrant hues meet lasting protection'
    },
    {
      image: 'assets/Acrylic_Putty.jpg',
      title: 'ACRYLIC PUTTY',
      description: 'Acrylic Putty: Your secret weapon for smooth, even walls that hold paint like a dream'
    },
    {
      image: 'assets/Tile_Adhesive.jpg',
      title: 'GLOBAL TILE ADHESIVE',
      description: 'With Global Tile Adhesive, your tiles stay in place, your surfaces stay smooth, and your designs stay timeless.'
    },
    {
      image: 'assets/Floor_Adhesive.jpg',
      title: 'GLOBAL FLOOR ADHESIVE',
      description: 'Strong adhesion for every surface – Floor Adhesive keeps your floors in place with ease and precision.'
    }
  ];
  showPopup = true;

  closePopup() {
    this.showPopup = false;
  }
}
