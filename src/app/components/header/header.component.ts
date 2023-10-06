import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SearchService } from 'src/app/services/search-service.service';
import { Observable } from 'rxjs';
import { clientModel } from 'src/app/client-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent {

  balance:number = 0;

  constructor(private dialog: MatDialog, private searhService:SearchService) {
    console.log(this.searhService.getBalance().subscribe())
    this.searhService.getBalance().subscribe((valor) => this.balance = valor);
  }
  openModalDeposit() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px', // Ajuste o tamanho conforme necessário
      height: '600px',
    });
  }
  
  getBalanceUser() {
    return this.balance;
  }
    
  
  

  
}






