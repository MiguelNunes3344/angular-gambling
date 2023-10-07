import { Component, ViewChild, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  color:string = 'green';
  angulo:string= '213';
  url:string = 'http://localhost:8080/number';
  @ViewChild('roullete')roullete!: HTMLElement;

  constructor(searchService:SearchService, private httpClient:HttpClient) {
    
  }
  ngOnInit(): void {

    setInterval(() => {
      this.getHttpNumber();
    },10000);
  }
  getHttpNumber() {
    return this.httpClient.get<string>(this.url).subscribe((valor) => this.angulo = valor);
  }
  
  
  getAngulo(): string {
    
    return this.angulo+'deg';
  }
  betBlack() {
    const number  = Number(this.angulo);
    if (number >=  5 && number<= 14 || number >=  24 && number <= 33 || number >=  43 && number <= 52 || number >=  62 && number<= 70 || number >=  81 && number<= 89 || number >=  100 && number<= 108 || number >=  118 && number<= 127 || number >=  137 && number<= 146 || number >=  156 && number<= 165 || number >=  194 && number<= 203 || number >=  213 && number <= 222 || number >=  232 && number<= 241 || number >=  251 && number<= 260 || number >=  270 && number<= 279 || number >=  289 && number<= 298 || number >=  308 && number<= 317 || number >=  327 && number<= 336 || number >=  346 && number<= 355) {
      console.log(Number(this.angulo))
    }
  }
  betRed() {
    const number  = Number(this.angulo);
    if (number >=  15 && number<= 23 || number >=  34 && number <= 42 || number >=  53 && number <= 61 || number >=  71 && number<= 80 || number >=  90 && number<= 99 || number >=  109 && number<= 117 || number >=  128 && number<= 136 || number >=  147 && number<= 155 || number >=  166 && number<= 174 || number >=  185 && number<= 193 || number >=  204 && number <= 212 || number >=  223 && number<= 231 || number >=  242 && number<= 250 || number >=  261 && number<= 269 || number >=  280 && number<= 288 || number >=  299 && number<= 307 || number >=  318 && number<= 326 || number >=  337 && number<= 345) {
      console.log(Number(this.angulo))
    }
  }
  betGreen() {
    const number  = Number(this.angulo);
    if (number >= 175 && number <= 184 || number >= 356 || number <=4)  {
      console.log("green");
    } 
  }


  


}
