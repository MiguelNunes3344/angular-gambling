import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient} from "@angular/common/http"
@Component({
    selector: 'app-modal-component-withdraw',
    templateUrl: './modal.component.withdraw.html',
    styleUrls: ['./modal.component.withdraw.css']

})

export class ModalComponentWithdraw {
    url:string = "http://localhost:8080/withdraw"

    @ViewChild('inputBalance') inputBalance:ElementRef;


    constructor(private httpClient:HttpClient, element:ElementRef) {
        this.inputBalance = element;

    }

    withdrawBalance() {
        const body = {number: this.inputBalance.nativeElement.value};
        this.httpClient.post(this.url,body).subscribe();
    }
}