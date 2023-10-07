import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  angulo:string= '0';
  color:string = '';
  @ViewChild('roullete')roullete!: HTMLElement;

  constructor(searchService:SearchService) {
    
  }

  getStatusColor() {
    return this.color = 'green';
  }
  getColor() {
    this.color = 'blue';
  }
  getAngulo(): string {
    return this.angulo+'deg';
  }
  betBlack() {

  }
  betRed() {
    
  }
  betGreen() {
    
  }


}
