import {Component, Input, OnInit} from '@angular/core';
import {CategoryType} from '../../../../types/category.type';
import {CommonModule} from '@angular/common';
import {PopUpService} from '../../services/pop-up.service';

@Component({
  selector: 'category-card',
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent implements OnInit {
  @Input('category') category: CategoryType = {
    id: '',
    category: '',
    image: '',
    description: ''
  }
  categoryStyles = {
    backgroundColor: '',
    width: ''
  }
  constructor(private popUpService:PopUpService) {
  }
  ngOnInit() {
    if (this.category) {
      if (this.category.category === 'Marketing') {
        this.categoryStyles.backgroundColor = '#03CEA4';
        this.categoryStyles.width = '91px';
      } else if (this.category.category === 'Management') {
        this.categoryStyles.backgroundColor = '#5A87FC';
        this.categoryStyles.width = '111px';
      } else if (this.category.category === 'HR & Recruting') {
        this.categoryStyles.backgroundColor = '#F89828';
        this.categoryStyles.width = '127px';
      } else if (this.category.category === 'Design') {
        this.categoryStyles.backgroundColor = '#F52F6E';
        this.categoryStyles.width = '66px';
      } else if (this.category.category === 'Development') {
        this.categoryStyles.backgroundColor = '#7772F1';
        this.categoryStyles.width = '113px';
      }
    }
  }
  showPopUp(){
    this.popUpService.showPopUp.set(true);
  }
}
