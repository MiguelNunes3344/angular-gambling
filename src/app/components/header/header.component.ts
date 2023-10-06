import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private dialog: MatDialog) {

  }
  openModalDeposit() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px', // Ajuste o tamanho conforme necessário
      height: '600px',
    });
  }
  

  
}






