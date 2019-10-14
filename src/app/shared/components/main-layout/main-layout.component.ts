import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  store = []

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  click() {
  	console.log("this.auth:", this.auth.getIsAuth())
  	
  }

}
