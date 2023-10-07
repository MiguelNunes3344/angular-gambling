import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SearchService } from 'src/app/services/search-service.service';
import { ModalComponentWithdraw } from '../modal/modal-component-withdraw';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent {

  balance:number = 0;

  constructor(private dialog: MatDialog, private searhService:SearchService) {
    this.searhService.getBalance().subscribe((valor) => this.balance = valor);
  }

  openModalDeposit() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px', 
      height: '600px',
    });
  }
  openModalWithdraw() {
    const dialogRef = this.dialog.open(ModalComponentWithdraw, {
      width: '600px',
      height: '600px'
    });
  }
  
  getBalanceUser() {
    return this.balance;
  }
  setBalanceUser(balanceInput:number) {
    this.balance += balanceInput;
  }

    
  
  

  
}






