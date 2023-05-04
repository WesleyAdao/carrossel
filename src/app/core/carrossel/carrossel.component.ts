import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CarrosselInterface } from './interfaces/carrossel.interface';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit, OnDestroy {
  @Input() slides: CarrosselInterface[] = [];
  @Input() interval!: number;
  @Input() imageSrc!: any;

  currentSlide: number = 0;
  timeoutId?: number;
  isSliding: boolean = false;

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.next(), this.interval);
  }

  next(): void {
    if (!this.isSliding) {
      this.isSliding = true;
      this.currentSlide = (this.currentSlide + 1) % this.imageSrc.length;
      const slider = document.querySelector('.slider') as HTMLDivElement;
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      setTimeout(() => {
        this.isSliding = false;
      }, 500);
    }
    this.resetTimer();
  }

  goToPrevious(): void {
    if (!this.isSliding) {
      this.isSliding = true;
      this.currentSlide = (this.currentSlide - 1 + this.imageSrc.length) % this.imageSrc.length;
      const slider = document.querySelector('.slider') as HTMLDivElement;
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      setTimeout(() => {
        this.isSliding = false;
      }, 500);
    }
  }

  goToNext(): void {
    if (!this.isSliding) {
      this.isSliding = true;
      this.currentSlide = (this.currentSlide + 1) % this.imageSrc.length;
      const slider = document.querySelector('.slider') as HTMLDivElement;
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      setTimeout(() => {
        this.isSliding = false;
      }, 500);
    }
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

  onSlideHover(): void {
    window.clearTimeout(this.timeoutId);
  }

  onSlideLeave(): void {
    this.resetTimer();
  }
}