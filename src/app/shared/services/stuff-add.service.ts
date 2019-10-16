import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class StuffAddService {
    stuff = [
        {
            name: 'Stuff 1',
            image: '',
            quantity: 0,
            description: 'Description of Stuff 1',
            id: '11111',
            deleted: false,
        },
        {
            name: 'Stuff 2',
            image: '',
            quantity: 0,
            description: 'Description of Stuff 2',
            id: '22222',
            deleted: false,
        },
        {
            name: 'Stuff 3',
            image: '',
            quantity: 0,
            description: 'Description of Stuff 3',
            id: '33333',
            deleted: false,
        },
        {
            name: 'Stuff 4',
            image: '',
            quantity: 0,
            description: 'Description of Stuff 4',
            id: '44444',
            deleted: false,
        },
    ];

    getStuffList() {
        return this.stuff;
    }

    getById(id) {
        return this.stuff.find(item => item.id === id);
    }

    setStuffDeleted(id) {
        this.stuff.find(item => id).deleted = true;
    }
}
