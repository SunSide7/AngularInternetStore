import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: [
    './main-layout.component.sass'
  ]
})
export class MainLayoutComponent implements OnInit {

  store = [];

  constructor(
    private auth: AuthService,
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
  }

  getStuffNumber() {
    return this.storeService.getNumberOfStuffList();
  }

}
