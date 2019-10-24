import {Injectable} from '@angular/core';
import {ProfileInfo} from '../interfaces';

@Injectable({providedIn: 'root'})

export class ProfileInfoService {
  private profileInfo: ProfileInfo = {
    name: 'Default name',
    email: 'mail@mail.com',
    password: '1234567',
    confirmPassword: '1234567'
  };

  getProfileInfo() {
    return this.profileInfo;
  }

  setProfileInfo(key, newState) {
    this.profileInfo[key] = newState;
  }

}
