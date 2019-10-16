import {Component, OnInit, Input} from '@angular/core';
import {StuffAddService} from '../../services/stuff-add.service';
import {StuffItem} from '../../interfaces';
import {StoreService} from '../../services/store.service';

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['./store-item.component.sass']
})
export class StoreItemComponent implements OnInit {

    @Input('item') item: StuffItem;

    constructor(private storeService: StoreService) {
    }

    ngOnInit() {
    }


    getStuff() {
        // console.log(this.stuff)
    }

    deleteStuff(id) {

        this.storeService.deleteStuff(this.item);

    }

}
