import {Component, OnInit, Injectable} from '@angular/core';
import {StoreService} from '../shared/services/store.service';
import {Router} from '@angular/router';
import {DialogModalService} from '../shared/services/dialog-modal.service';

@Component({
    selector: 'app-store-page',
    templateUrl: './store-page.component.html',
    styleUrls: ['./store-page.component.sass']
})
@Injectable({providedIn: 'root'})
export class StorePageComponent implements OnInit {

    stuff = this.storeService.getStuffList();
    idModalDialogMessage: string = 'card_buy_clicked';

    constructor(
        private storeService: StoreService,
        private dialogService: DialogModalService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.dialogService.setButtonNotDisabled()
        this.dialogService.fillInBtnText(this.idModalDialogMessage)
    }

    getStuffNumber() {
        this.storeService.getNumberOfStuffList();
    }

    onBuyActionClick() {
        this.storeService.clearStuffList();
        this.dialogService.showInfoById(true, this.idModalDialogMessage);
        this.router.navigate(['/payment-success']);
    }

}
