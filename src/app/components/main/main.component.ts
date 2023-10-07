import { Component, ViewChild, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  ngOnInit(): void {

    setInterval(() => {
      this.getHttpNumber();
    },100000);
  }








  angulo:string= '0';
  color:string = '';
  url:string = 'http://localhost:8080/number';
  @ViewChild('roullete')roullete!: HTMLElement;

  constructor(searchService:SearchService, private httpClient:HttpClient) {
    
  }
  
  getHttpNumber() {
    return this.httpClient.get<string>(this.url).subscribe((valor) => this.angulo = valor);
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
