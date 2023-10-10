import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { SearchService } from "src/app/services/search-service.service";
import { environment } from "src/environments/environment.development";
@Component({
    selector: 'app-modal-component-withdraw',
    templateUrl: './modal.component.withdraw.html',
    styleUrls: ['./modal.component.withdraw.css']

})

export class ModalComponentWithdraw {
    private url = environment.urlWithdraw;
    @ViewChild('inputBalance') inputBalance:ElementRef;

    constructor(private httpClient:HttpClient, element:ElementRef, private searchService:SearchService) {
        this.inputBalance = element;
    }

    withdrawBalance() {
        this.searchService.getBalance().subscribe((valor) => localStorage.setItem("balance",valor.toString()))
        
        console.log("Valor da balança "+this.inputBalance.nativeElement.value);
        
        setTimeout(()=> {
            var balance = localStorage.getItem('balance');
            if (this.inputBalance.nativeElement.value <= Number(balance)) {
                const body = {number: this.inputBalance.nativeElement.value};
                this.httpClient.post(this.url,body).subscribe();
            } else {
                alert("Sem saldo")
                
            }
        },1000)
        
    }
}