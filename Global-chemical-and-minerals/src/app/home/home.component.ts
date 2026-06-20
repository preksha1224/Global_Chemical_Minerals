import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('rangeTrack') rangeTrack!: ElementRef<HTMLDivElement>;

  private isBrowser: boolean;
  showPopup = true;
  activeFilter = 'All';
  selectedProduct: any = null;

  filterTabs = ['All', 'Wall Putty', 'White Cement', 'Tile Adhesive', 'Paint & Emulsion', 'Waterproofing', 'Texture Paint'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}

  closePopup() { this.showPopup = false; }

  setFilter(filter: string) { this.activeFilter = filter; }

  scrollRange(dir: number) {
    const el = this.rangeTrack?.nativeElement;
    if (el) el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  }

  submitOrder() {
    alert('Thank you! We will contact you within 2 business hours.');
  }

  openProduct(p: any) { this.selectedProduct = p; }
  closeProduct() { this.selectedProduct = null; }

  scrollToSection(id: string) {
    if (!this.isBrowser) return;
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    // if already on home, just scroll; otherwise navigate first
    if (this.router.url === '/home' || this.router.url === '/') {
      doScroll();
    } else {
      this.router.navigate(['/home']).then(() => setTimeout(doScroll, 200));
    }
  }

  get filteredProducts() {
    if (this.activeFilter === 'All') return this.allProducts;
    return this.allProducts.filter(p => p.category === this.activeFilter);
  }

  categories = [
    { name: 'Wall Putty',       count: 5, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29.jpeg' },
    { name: 'White Cement',     count: 1, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.30.jpeg' },
    { name: 'Tile Adhesive',    count: 2, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (1).jpeg' },
    { name: 'Paint & Emulsion', count: 3, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (1).jpeg' },
    { name: 'Waterproofing',    count: 1, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (3).jpeg' },
    { name: 'Texture Paint',    count: 1, image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (3).jpeg' },
  ];

  allProducts = [
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29.jpeg',
      title: 'Master Coat Plus Acrylic Powder Wall Putty',
      category: 'Wall Putty',
      badge: 'BEST SELLER',
      tags: ['25 KG', 'Primer Free', 'Interior Wall', 'ISO 9001:2015'],
      price: 520,
      moq: '500 Kilogram',
      brand: 'Global',
      usage: 'Interior Wall',
      packaging: 'Packet / Bag',
      details: 'High-performance acrylic powder wall putty for smooth, even interior walls. Primer-free formula for easy application and superior bonding.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.30 (1).jpeg',
      title: 'Global Wall Putty',
      category: 'Wall Putty',
      badge: 'VERSATILE',
      tags: ['20 KG', 'White Cement Based', 'Interior & Exterior'],
      price: 380,
      moq: '1000 Kilogram',
      brand: 'Global',
      usage: 'Interior & Exterior',
      packaging: 'Packet',
      details: 'White cement based wall putty for both interior and exterior surfaces. Provides excellent adhesion and a smooth base for painting.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 10.17.54.jpeg',
      title: 'Global Wall Putty Snow White',
      category: 'Wall Putty',
      badge: 'POPULAR',
      tags: ['5 KG', 'White Cement Putty', 'Snow White'],
      price: 120,
      moq: '100 Kilogram',
      brand: 'Global',
      usage: 'Interior & Exterior',
      packaging: 'Packet',
      details: 'Snow white wall putty in convenient 5 KG packing. Ideal for small repairs and touch-up work on walls and ceilings.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 10.17.54 (1).jpeg',
      title: 'Global Wall Putty Snow White',
      category: 'Wall Putty',
      badge: 'TRIAL PACK',
      tags: ['1 KG', 'White Cement Putty', 'Snow White'],
      price: 35,
      moq: '50 Kilogram',
      brand: 'Global',
      usage: 'Interior & Exterior',
      packaging: 'Packet',
      details: '1 KG trial pack of snow white wall putty. Perfect for sampling and small repair work before bulk purchase.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.30.jpeg',
      title: 'Global White Cement Snow White',
      category: 'White Cement',
      badge: 'ISO CERTIFIED',
      tags: ['50 KG', 'Snow White', 'Superior Quality'],
      price: 650,
      moq: '500 Kilogram',
      brand: 'Global',
      usage: 'Construction & Finishing',
      packaging: 'PP Sack Bag',
      details: 'ISO 9001:2015 certified premium white cement with superior whiteness and strength. Ideal for flooring, grouting, and decorative finishes.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (1).jpeg',
      title: 'Global Gold Wall Tile Adhesive',
      category: 'Tile Adhesive',
      badge: 'PREMIUM T2',
      tags: ['20 KG', 'T2 Type', 'Ceramic & Marble'],
      price: 480,
      moq: '500 Kilogram',
      brand: 'Global',
      usage: 'Wall Tiles',
      packaging: 'Bag',
      details: 'Premium T2 type tile adhesive for wall tiles. Superior bond strength for ceramic, vitrified, and marble tiles on walls.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (2).jpeg',
      title: 'Global Silver Floor Tile Adhesive',
      category: 'Tile Adhesive',
      badge: 'TRUSTED T1',
      tags: ['20 KG', 'T1 Type', 'Ceramic & Mosaic'],
      price: 420,
      moq: '500 Kilogram',
      brand: 'Global',
      usage: 'Floor Tiles',
      packaging: 'Bag',
      details: 'T1 type floor tile adhesive for ceramic, mosaic, and porcelain floor tiles. High compressive strength for long-lasting bond.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28.jpeg',
      title: 'Global Acrylic Primer Interior & Exterior',
      category: 'Paint & Emulsion',
      badge: 'MULTIPURPOSE',
      tags: ['20 L', 'Eco Friendly', 'Anti Fungal', 'High Sheen'],
      price: 450,
      moq: '200 Litre',
      brand: 'Global',
      usage: 'Interior & Exterior',
      packaging: 'Can / Bucket',
      details: 'Eco-friendly acrylic primer with anti-fungal properties. Provides excellent base for topcoats with superior adhesion on all surfaces.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (1).jpeg',
      title: 'Global Sparkle Interior Emulsion',
      category: 'Paint & Emulsion',
      badge: '2YR WARRANTY',
      tags: ['20 L', 'Eco Friendly', 'Rich Sheen', 'Anti Fungal'],
      price: 560,
      moq: '200 Litre',
      brand: 'Global',
      usage: 'Interior Walls & Ceilings',
      packaging: 'Bucket',
      details: 'Rich sheen interior emulsion with anti-fungal properties. 2-year warranty on colour and finish. Eco-friendly low VOC formula.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (2).jpeg',
      title: 'Global Smart Shield Exterior Emulsion',
      category: 'Paint & Emulsion',
      badge: '2YR WARRANTY',
      tags: ['20 L', 'Eco Friendly', 'Rich Sheen', 'Anti Fungal'],
      price: 620,
      moq: '200 Litre',
      brand: 'Global',
      usage: 'Exterior Walls',
      packaging: 'Bucket',
      details: 'Weather-resistant exterior emulsion with UV protection and anti-fungal formula. Protects against rain, sun, and dust for 2+ years.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.27.jpeg',
      title: 'Global Acrylic Distemper',
      category: 'Paint & Emulsion',
      badge: 'ECO FRIENDLY',
      tags: ['Interior Wall Paint', 'Water Resistant', 'Heat Resistant'],
      price: 340,
      moq: '200 Litre',
      brand: 'Global',
      usage: 'Interior Walls',
      packaging: 'Bucket',
      details: 'Water and heat resistant acrylic distemper for interior walls. Easy to apply with excellent coverage and smooth matte finish.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (3).jpeg',
      title: 'Global Smart Home Care Damp Proof',
      category: 'Waterproofing',
      badge: '10YR WARRANTY',
      tags: ['20 L', 'Waterproof Coating', 'Exterior', 'Anti Fungal'],
      price: 580,
      moq: '100 Litre',
      brand: 'Global',
      usage: 'Exterior / Terrace / Basement',
      packaging: 'Can / Bucket',
      details: '10-year warranty waterproofing coating. Protects against dampness, seepage, and water ingress on terraces, basements, and exterior walls.'
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (3).jpeg',
      title: 'Global Texture Paints Exterior & Interior',
      category: 'Texture Paint',
      badge: 'DURABLE',
      tags: ['25 KG', 'Exterior & Interior', 'Water Resistant'],
      price: 620,
      moq: '200 Kilogram',
      brand: 'Global',
      usage: 'Exterior & Interior',
      packaging: 'Bucket / Bag',
      details: 'Premium texture paint for exterior and interior surfaces. Water resistant with multiple finish options â€” rough, smooth, and designer patterns.'
    },
  ];
}
