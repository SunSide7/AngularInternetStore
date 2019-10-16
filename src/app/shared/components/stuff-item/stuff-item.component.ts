import {Component, OnInit, Input} from '@angular/core';
import {StuffItem} from '../../interfaces';
import {StoreService} from '../../services/store.service';

@Component({
    selector: 'app-stuff-item',
    templateUrl: './stuff-item.component.html',
    styleUrls: ['./stuff-item.component.sass']
})
export class StuffItemComponent implements OnInit {

    @Input('item') item: StuffItem;

    constructor(private storeService: StoreService) {
    }

    ngOnInit() {

    }

    getStuff(id) {

        this.storeService.addStuff(this.item);

    }

}
