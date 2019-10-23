import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  isStuffFromServer: boolean = false

  constructor(private http: HttpClient) {
  }

  stuffFromServerInit() {
    const stuffPromise = new Promise(resolve => {
      // Async Operation
      this.http.get('https://api.myjson.com/bins/kqp6w')
        .subscribe(response => {
          console.log('Response', response);

          this.getStuffListResponse(response);

          this.stuff = this.getStuffList();

          console.log('Promise done! This.stuff:', this.stuff);

          this.isStuffFromServer = true

          resolve();

        });

    });

    return stuffPromise;
  }

  getStuffList() {
    return this.stuff;
  }

  getStuffListResponse(stuffJSON) {
    this.stuff = stuffJSON.products;
  }

  getById(id) {
    return this.stuff.find(item => item.id === id);
  }

  setStuffDeleted(id) {
    this.stuff.find(item => id).deleted = true;
  }

}
