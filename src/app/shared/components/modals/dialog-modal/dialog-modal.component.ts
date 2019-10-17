import {Component, OnInit} from '@angular/core';
import {DialogModalService} from '../../../services/dialog-modal.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.sass'],
  // providers: [DialogModalService],
})
export class DialogModalComponent implements OnInit {

  // isVisible = this.dialogService.setModalState();

  constructor(private dialogService: DialogModalService) {
  }

  ngOnInit() {
  }

  // onShow() {
  //   console.log('From Dialog Modal Component:', this.isVisible);
  //   return this.isVisible;
  // }

  onClose(event) {
    this.dialogService.isModalVisible = false;
  }

}
