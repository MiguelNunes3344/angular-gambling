import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  
  @ViewChild('balanceInput') balanceInput:ElementRef;
  url:string= 'http://localhost:8080/update'
 
  constructor(private httpClient: HttpClient, element:ElementRef) {
    this.balanceInput = element;
  }
  updateBalance() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const quotes = this.balanceInput.nativeElement.value;
    const body = { 'number':quotes };
    this.httpClient.post(this.url,body,{headers}).subscribe();
    
  }
 



}
