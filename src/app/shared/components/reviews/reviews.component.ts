import {Component, OnInit} from '@angular/core';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {ReviewsService} from '../../services/reviews.service';
import {ReviewsType} from '../../../../types/reviews.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'reviews',
  imports: [CarouselModule, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  reviews:ReviewsType[]=[];
  customOptionsReviews: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 24,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  constructor(private reviewsService:ReviewsService) {
  }
  ngOnInit() {
    this.reviews = this.reviewsService.reviews();
  }
}
