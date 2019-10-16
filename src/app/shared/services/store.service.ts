import {Injectable} from '@angular/core';
import {StuffAddService} from './stuff-add.service';

@Injectable({providedIn: 'root'})

export class StoreService {
    private card = [];

    constructor(private stuffAddService: StuffAddService) {
    }

    addStuff(stuff) {
        if (!stuff.quantity) {

            stuff.deleted = false;

            this.card.unshift(stuff);

            stuff.quantity += 1;

        } else {
            stuff.quantity += 1;
        }

        console.log(stuff);
    }

    deleteStuff(stuff) {
        const splicedItem = this.card.splice(this.card.indexOf(stuff), 1);

        this.stuffAddService.setStuffDeleted(stuff.id);
        this.stuffAddService.getById(stuff.id).quantity = 0;
    }

    getStuffList() {
        return this.card;
    }

    getNumberOfStuffList() {
        const numberOfStuff = this.card.reduce((sum, item) => sum + item.quantity, 0);

        if (numberOfStuff) {
            return (': ' + numberOfStuff);
        }
    }

    clearStuffList() {
        this.card.splice(0, this.card.length);
        this.stuffAddService.getStuffList().forEach(item => item.quantity = 0);
    }
}
