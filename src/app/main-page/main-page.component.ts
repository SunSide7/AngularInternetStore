import {Component, OnInit, Injectable} from '@angular/core';
import {StoreItemComponent} from '../shared/components/store-item/store-item.component';

import {StuffAddService} from '../shared/services/stuff-add.service';
import {StoreService} from '../shared/services/store.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})

@Injectable({providedIn: 'root'})
export class MainPageComponent implements OnInit {

  stuff = this.stuffService.getStuffList();
  httpResponse: any;

  constructor(
    private stuffService: StuffAddService,
    private storeService: StoreService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    const stuff = this.http.get('https://api.myjson.com/bins/kqp6w')
      .subscribe(response => {
        console.log('Response', response);
        this.httpResponse = response;

        this.stuffService.getStuffListResponse(this.httpResponse)

        this.stuff = this.stuffService.getStuffList()

      });

    console.log(stuff);
  }

  getStuff(id) {
    const stuffItem = this.stuff.filter(item => item.id === id)[0];

    this.storeService.addStuff(stuffItem);

  }

}
