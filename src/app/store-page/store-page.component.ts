import { Component, OnInit, Injectable } from '@angular/core';
import { StoreItemComponent } from '../shared/components/store-item/store-item.component'
import { StuffAddService } from '../shared/services/stuff-add.service'

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.sass']
})
@Injectable({providedIn: 'root'})
export class StorePageComponent implements OnInit {

	stuff = this.stuffService.getStuffList()

  	constructor(private stuffService: StuffAddService) { }

  	ngOnInit() {
  	}

  	getStuff() {
  		console.log(this.stuff)
  	}

}
