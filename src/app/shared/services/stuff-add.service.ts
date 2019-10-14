import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class StuffAddService {
	stuff = [
		{
	      name: 'Stuff 1',
	      image: '',
	      description: 'Description of Stuff 1',
	      id: '11111',
	    },
	    {
	      name: 'Stuff 2',
	      image: '',
	      description: 'Description of Stuff 2',
	      id: '22222',
	    },
	    {
	      name: 'Stuff 3',
	      image: '',
	      description: 'Description of Stuff 3',
	      id: '33333',
	    },
	    {
	      name: 'Stuff 4',
	      image: '',
	      description: 'Description of Stuff 4',
	      id: '44444',
	    },
	]

	getStuffList() {
		return this.stuff
	}

	getById(id) {
		return this.stuff.find(item => item.id === id)
	}
}