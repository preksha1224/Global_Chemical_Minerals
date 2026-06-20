import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  filterTabs = ['All', 'Wall Putty', 'White Cement', 'Tile Adhesive', 'Paint & Emulsion', 'Waterproofing', 'Texture Paint'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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
      price: 520
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.30 (1).jpeg',
      title: 'Global Wall Putty',
      category: 'Wall Putty',
      badge: 'VERSATILE',
      tags: ['20 KG', 'White Cement Based', 'Interior & Exterior'],
      price: 380
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 10.17.54.jpeg',
      title: 'Global Wall Putty Snow White',
      category: 'Wall Putty',
      badge: 'POPULAR',
      tags: ['5 KG', 'White Cement Putty', 'Snow White'],
      price: 120
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 10.17.54 (1).jpeg',
      title: 'Global Wall Putty Snow White',
      category: 'Wall Putty',
      badge: 'TRIAL PACK',
      tags: ['1 KG', 'White Cement Putty', 'Snow White'],
      price: 35
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.30.jpeg',
      title: 'Global White Cement Snow White',
      category: 'White Cement',
      badge: 'ISO CERTIFIED',
      tags: ['50 KG', 'Snow White', 'Superior Quality'],
      price: 650
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (1).jpeg',
      title: 'Global Gold Wall Tile Adhesive',
      category: 'Tile Adhesive',
      badge: 'PREMIUM T2',
      tags: ['20 KG', 'T2 Type', 'Ceramic & Marble'],
      price: 480
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (2).jpeg',
      title: 'Global Silver Floor Tile Adhesive',
      category: 'Tile Adhesive',
      badge: 'TRUSTED T1',
      tags: ['20 KG', 'T1 Type', 'Ceramic & Mosaic'],
      price: 420
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28.jpeg',
      title: 'Global Acrylic Primer Interior & Exterior',
      category: 'Paint & Emulsion',
      badge: 'MULTIPURPOSE',
      tags: ['20 L', 'Eco Friendly', 'Anti Fungal', 'High Sheen'],
      price: 450
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (1).jpeg',
      title: 'Global Sparkle Interior Emulsion',
      category: 'Paint & Emulsion',
      badge: '2YR WARRANTY',
      tags: ['20 L', 'Eco Friendly', 'Rich Sheen', 'Anti Fungal'],
      price: 560
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (2).jpeg',
      title: 'Global Smart Shield Exterior Emulsion',
      category: 'Paint & Emulsion',
      badge: '2YR WARRANTY',
      tags: ['20 L', 'Eco Friendly', 'Rich Sheen', 'Anti Fungal'],
      price: 620
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.27.jpeg',
      title: 'Global Acrylic Distemper',
      category: 'Paint & Emulsion',
      badge: 'ECO FRIENDLY',
      tags: ['Interior Wall Paint', 'Water Resistant', 'Heat Resistant'],
      price: 340
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.28 (3).jpeg',
      title: 'Global Smart Home Care Damp Proof',
      category: 'Waterproofing',
      badge: '10YR WARRANTY',
      tags: ['20 L', 'Waterproof Coating', 'Exterior', 'Anti Fungal'],
      price: 580
    },
    {
      image: 'assets/WhatsApp Image 2026-06-20 at 09.16.29 (3).jpeg',
      title: 'Global Texture Paints Exterior & Interior',
      category: 'Texture Paint',
      badge: 'DURABLE',
      tags: ['25 KG', 'Exterior & Interior', 'Water Resistant'],
      price: 620
    },
  ];
}
