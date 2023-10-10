import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';
import { HttpClient } from '@angular/common/http'
import { Observable, first, take } from 'rxjs';
import { chatModel } from 'src/app/chat.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  colorRoulete: string = '';
  angulo: string = '360';
  url: string = 'http://localhost:8080/number';
  urlBalance: string = 'http://localhost:8080/update';
  @ViewChild('valorDaAposta') inputElement: ElementRef;
  @ViewChild('messageUser') inputMessage: ElementRef;
  anguloColor = new Observable<string[]>();
  fields: string[] = [];
  chatting: chatModel[] = [];
  disable: boolean = false;
  @ViewChild('roullete') roullete!: HTMLInputElement;

  constructor(private searchService: SearchService, private httpClient: HttpClient, element: ElementRef, elementMessage: ElementRef) {
    this.inputElement = element;
    this.inputMessage = elementMessage;
  }
  ngOnInit(): void {

    setInterval(() => {
      this.getDisable();
      this.getHttpNumber();
      setTimeout(() => {
        this.getDisable();

      }, 9000);

    }, 15000);


  }

  getHttpNumber() {
    this.anguloColor = this.searchService.getNumberColor();
    this.anguloColor.pipe(first()).subscribe((valor) => this.fields = valor);
    this.anguloColor.pipe(take(1)).subscribe((valor) => this.fields = valor);
    this.angulo = this.fields[0];
    this.colorRoulete = this.fields[1];


    var colorCach = localStorage.getItem('cor');
    if (colorCach != null) {

      if (this.colorRoulete == colorCach) {
        if (colorCach == 'green') {
          const body = { 'number': this.getInputValue() * 14 }
          this.httpClient.post(this.urlBalance, body).subscribe();
        }
        const body = { 'number': this.getInputValue() }
        this.httpClient.post(this.urlBalance, body).subscribe();
      } else if (this.colorRoulete != colorCach) {

        var numberStorage;
        var valorRetornado = this.getInputValue();
        if (valorRetornado != null) {
          numberStorage = localStorage.getItem('betted');
          if (Number(numberStorage) >= valorRetornado) {
            this.searchService.removeBalance(valorRetornado);
          } else {
            this.searchService.removeBalance(Number(numberStorage));
          }
        }


      }
    }
    this.colorRoulete = '';
    localStorage.clear();
  }

  getDisable() {
    if (this.disable != true) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  getInputValue() {
    var valor = Number(this.inputElement.nativeElement.value);
    return valor;
  }

  getAngulo(): string {
    return this.angulo + 'deg';
  }

  betBlack() {
    var numberStorage;
    this.searchService.getBalance().subscribe((valor) => localStorage.setItem('betted', valor.toString()));

    setTimeout(() => {
      var valorRetornado = this.getInputValue();
      numberStorage = localStorage.getItem('betted');
      if (Number(numberStorage) >= valorRetornado) {
        localStorage.setItem('cor', 'black');
      } else {
        alert("Saldo Insuficiente");
      }
    }, 500)
  }

  betRed() {
    var numberStorage;
    this.searchService.getBalance().subscribe((valor) => localStorage.setItem('betted', valor.toString()));

    setTimeout(() => {
      var valorRetornado = this.getInputValue();
      numberStorage = localStorage.getItem('betted');
      if (Number(numberStorage) >= valorRetornado) {
        localStorage.setItem('cor', 'red');
      } else {
        alert("Saldo Insuficiente");
      }
    }, 500)
  }

  betGreen() {
    var numberStorage;
    this.searchService.getBalance().subscribe((valor) => localStorage.setItem('betted', valor.toString()));

    setTimeout(() => {
      var valorRetornado = this.getInputValue();
      numberStorage = localStorage.getItem('betted');
      if (Number(numberStorage) >= valorRetornado) {
        localStorage.setItem('cor', 'green');
      } else {
        alert("Saldo Insuficiente");
      }
    }, 500)
  }
  addOne() {
    this.inputElement.nativeElement.value = Number(this.inputElement.nativeElement.value) + 1;
  }
  addTen() {
    this.inputElement.nativeElement.value = Number(this.inputElement.nativeElement.value) + 10;
  }
  addOneHundred() {
    this.inputElement.nativeElement.value = Number(this.inputElement.nativeElement.value) + 100;
  }
  addOneThousand() {
    this.inputElement.nativeElement.value = Number(this.inputElement.nativeElement.value) + 1000;
  }
  max() {
    this.searchService.getBalance().subscribe((valor) => localStorage.setItem('betted', valor.toString()));
    var number = localStorage.getItem("betted");
    this.inputElement.nativeElement.value = Number(this.inputElement.nativeElement.value) + Number(number);
  }
  clearInput() {
    this.inputElement.nativeElement.value = "";
  }
  inviteMessage() {
    this.chatting.push(new chatModel("Usuário", this.inputMessage.nativeElement.value, ""));
  }

}
