import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class StoreService {
    private card = [];

    addStuff(stuff) {
        this.card.unshift(stuff);
    }

    deleteStuff(id) {
        this.card.splice(id, 1);
    }

    getStuffList() {
        return this.card;
    }

    getNumberOfStuffList() {
        let numberOfStuff = this.card.length;

        if (numberOfStuff) {
            return (': ' + numberOfStuff);
        }
    }

    clearStuffList() {
        this.card.splice(0, this.card.length);
    }
}
