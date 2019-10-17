import {Injectable} from '@angular/core';

@Injectable()
export class DialogModalService {

  showMessage(toggled) {
    console.log(`from: Dialog Modal Service, ${toggled} toggled`);
  }

}
