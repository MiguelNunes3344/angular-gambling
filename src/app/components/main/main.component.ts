import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  angulo:string= '0';
  color:string = '';
  @ViewChild('roullete')roullete!: HTMLElement;

  getStatusColor() {
    return this.color = 'green';
  }
  getColor() {
    this.color = 'blue';
  }
  getAngulo(): string {
    return this.angulo+'deg';
  }



}
