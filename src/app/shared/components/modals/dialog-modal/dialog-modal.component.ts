import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.sass']
})
export class DialogModalComponent implements OnInit {

  isVisible = false

  constructor() { }

  ngOnInit() {
  }

  onShow(event) {
    this.isVisible = true
  }

  onClose(event) {
    this.isVisible = false
  }

}
