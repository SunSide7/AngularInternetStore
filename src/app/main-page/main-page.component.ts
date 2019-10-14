import { Component, OnInit, Injectable } from '@angular/core';
import { StoreItemComponent } from '../shared/components/store-item/store-item.component'

import { StuffAddService } from '../shared/services/stuff-add.service'
import { StoreService } from '../shared/services/store.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})

@Injectable({providedIn: 'root'})
export class MainPageComponent implements OnInit {

	stuff = this.stuffService.getStuffList()

  	constructor(
      private stuffService: StuffAddService,
      private storeService: StoreService
    ) { }

  	ngOnInit() {
  	}

  	getStuff(id) {
      const stuffItem = this.stuff.filter(item => item.id === id)[0]

      this.storeService.addStuff(stuffItem)

  	}

}
