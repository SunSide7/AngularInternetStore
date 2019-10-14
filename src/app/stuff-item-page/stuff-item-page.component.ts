import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { StuffItem } from '../shared/interfaces'

import { StuffAddService } from '../shared/services/stuff-add.service'

@Component({
  selector: 'app-stuff-item-page',
  templateUrl: './stuff-item-page.component.html',
  styleUrls: ['./stuff-item-page.component.sass']
})
export class StuffItemPageComponent implements OnInit {

	stuffItem: StuffItem

	constructor(
	 private route: ActivatedRoute,
	 private stuffService: StuffAddService
	) { }

	ngOnInit() {
	 this.route.params.subscribe((params: Params) => {
	  this.stuffItem = this.stuffService.getById(params.id)
	 })
	}

}
