import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { clientModel } from '../client-model';
import { HeaderComponent } from '../components/header/header.component';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SearchService {
  baseURL: string = "http://localhost:8080/balance";
  baseUrlNumber: string = "http://localhost:8080/number";
  baseUrlWithdraw: string = "http://localhost:8080/withdraw";
  baseUrlUpdate:string = "http://localhost:8080/update";
  
  
  constructor(private httpClient: HttpClient) { 

  }

 
 
 
  getRepos() {
    return this.httpClient.get<clientModel[]>(this.baseURL);
  }
  getBalance() {
    return this.httpClient.get<number>(this.baseURL);
  }
  getNumberColor() {
    return this.httpClient.get<string[]>(this.baseUrlNumber);
  }
  removeBalance(withdrawValue:number) {
    const body= {'number':withdrawValue}
    return this.httpClient.post(this.baseUrlWithdraw,body).subscribe();
  }
  updateBalance(number:number) {
    const body = {'number': number}
    return this.httpClient.post(this.baseUrlUpdate,body).subscribe();
  }

    
  
}
