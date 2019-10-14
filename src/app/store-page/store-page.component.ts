import { Component, OnInit, Injectable } from '@angular/core';
import { StoreItemComponent } from '../shared/components/store-item/store-item.component'
import { StoreService } from '../shared/services/store.service'

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.sass']
})
@Injectable({providedIn: 'root'})
export class StorePageComponent implements OnInit {

	stuff = this.storeService.getStuffList()

  	constructor(private storeService: StoreService) { }

  	ngOnInit() {
  	}

  	getStuff() {
  		// console.log(this.stuff)
  	}

    deleteStuff(id) {
      const stuffItemIdToDelete = this.stuff.indexOf(this.stuff.find(item => item.id === id))

      this.storeService.deleteStuff(stuffItemIdToDelete)

      // console.log(stuffItemIdToDelete)

      // console.log("Stuff Item to delete:", this.stuff.find(item => item.id === id))
    }

    getStuffNumber() {
      this.storeService.getNumberOfStuffList()
    }

}
