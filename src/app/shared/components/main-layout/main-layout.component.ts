import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
