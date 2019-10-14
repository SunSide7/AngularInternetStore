import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class StoreService {
	private card = []

	addStuff(stuff) {
		this.card.push(stuff)
	}

	deleteStuff() {
		
	}

	getStuffList() {
		return this.card
	}
}