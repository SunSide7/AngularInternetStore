import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DialogModalService {

  isModalVisible = false;
  modalMessage = '';


  showInfoById(outerBtnState, id) {

    console.log('outerBtnState:', outerBtnState)
    this.modalMessage = id;

    switch (id) {
      case 'login_page_submit':
        this.modalMessage = 'Вы успешно зашли в свой аккаунт!';
        break;
      case 'card_buy_clicked':
        this.modalMessage = 'Вы успешно оплатили свой заказ!';
        break;

      default:
        return;
    }
    this.isModalVisible = outerBtnState;

    console.log('this.isModalVisible:', this.isModalVisible)
  }

  closeModal() {
    console.log(this.isModalVisible)
    this.isModalVisible = false;

    console.log(this.isModalVisible)
  }

}
