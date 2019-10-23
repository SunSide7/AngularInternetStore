import {FormControl} from '@angular/forms';

export class MyValidators {

  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }

  static filterEmail(control: FormControl): { [key: string]: boolean } {
    if (!['mail@mail.com', 'dmitry.popov@mediapark.com'].includes(control.value)) {
      return {filterEmail: false};
    }
    return null;
  }

  static filterPassword(control: FormControl): { [key: string]: boolean } {
    if (!['1234567'].includes(control.value)) {
      return {filterEmail: false};
    }
    return null;
  }




}
