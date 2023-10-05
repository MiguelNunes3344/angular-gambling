import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { clientModel } from '../client-model';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SearchService {
  baseURL: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { 

  }

 
 
 
  getRepos() {
    return this.httpClient.get<clientModel[]>(this.baseURL);
  }
 
}
