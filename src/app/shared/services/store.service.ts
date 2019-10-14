import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class StoreService {
	private card = []

	onAddStuff(stuff) {
		this.card.push(stuff)
	}

	onDeleteStuff() {
		
	}
}