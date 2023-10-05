import { Component } from '@angular/core';
import { clientModel } from './client-model';
import { SearchService } from './services/search-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  client = new Observable<clientModel[]>();

  constructor(private service:SearchService) {
    this.getClient();
  }

  getClient() {
    this.client = this.service.getRepos();
  } 


}


