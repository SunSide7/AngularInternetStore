import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DialogModalService {

  isModalVisible = false;
  modalMessage = '';
  modalBtnText = '';
  isButtonSubmit = false;
  submitProps = {
    disabled: true,
    type: 'button'
  }

  listenDisableState(state) {
    this.submitProps.disabled = state
  }

  fillInBtnText(id) {

    switch (id) {
      case 'login_page_submit':
        this.modalBtnText = 'Login';
        break;
      case 'card_buy_clicked':
        this.modalBtnText = 'Buy this!';
        break;

      default:
        return;
    }

  }


  showInfoById(outerBtnState, id) {

    console.log('outerBtnState:', outerBtnState);
    this.modalMessage = id;

    switch (id) {
      case 'login_page_submit':
        this.modalMessage = 'Вы успешно зашли в свой аккаунт!';
        this.modalBtnText = 'Login';
        break;
      case 'card_buy_clicked':
        this.modalMessage = 'Вы успешно оплатили свой заказ!';
        this.modalBtnText = 'Buy this!';
        break;

      default:
        return;
    }
    this.isModalVisible = outerBtnState;

    console.log('this.isModalVisible:', this.isModalVisible);
  }

  closeModal() {
    console.log(this.isModalVisible);
    this.isModalVisible = false;

    console.log(this.isModalVisible);
  }

}
