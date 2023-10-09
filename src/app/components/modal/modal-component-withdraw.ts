import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { SearchService } from "src/app/services/search-service.service";
@Component({
    selector: 'app-modal-component-withdraw',
    templateUrl: './modal.component.withdraw.html',
    styleUrls: ['./modal.component.withdraw.css']

})

export class ModalComponentWithdraw {
    url:string = "http://localhost:8080/withdraw"

    @ViewChild('inputBalance') inputBalance:ElementRef;


    constructor(private httpClient:HttpClient, element:ElementRef, private searchService:SearchService) {
        this.inputBalance = element;

    }

    withdrawBalance() {
        
        this.searchService.getBalance().subscribe((valor) => localStorage.setItem("balance",valor.toString()))
        var balance = localStorage.getItem("balance");
        if (this.inputBalance.nativeElement.value > Number(balance)) {
            alert("Insufficient Balance")
        } else {
            const body = {number: this.inputBalance.nativeElement.value};
            this.httpClient.post(this.url,body).subscribe();
        }

        
    }
}