import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DialogModalService {

  isModalVisible = false;


  showModalById(id) {
    console.log(id);
  }

  getModalState(outerBtnState) {
    this.isModalVisible = outerBtnState;
    console.log('outerBtnState:', outerBtnState)
    console.log('this.isModalVisible getting:', this.isModalVisible);
  }

}
