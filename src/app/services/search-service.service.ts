import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { clientModel } from '../client-model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SearchService {
  baseURL: string = "http://localhost:8080/balance";
  

  constructor(private httpClient: HttpClient) { 

  }

 
 
 
  getRepos() {
    return this.httpClient.get<clientModel[]>(this.baseURL);
  }
  getBalance() {
    return this.httpClient.get<number>(this.baseURL);
  }
 
}
