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

  onClose(event) {
    this.dialogService.isModalVisible = false;
  }

}
