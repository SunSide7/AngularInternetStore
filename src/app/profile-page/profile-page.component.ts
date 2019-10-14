import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProfileInfoService } from '../shared/services/profile-info.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

	form: FormGroup
	profileInfo = this.profileInfoService.getProfileInfo()

	isInfoChanged: boolean = false
	isInfoSaved: boolean = true

  	constructor(private profileInfoService: ProfileInfoService) { }

  	ngOnInit() {
  		this.form = new FormGroup({
  			name: new FormControl(this.profileInfo.name, [
  				Validators.required
  			]),
  			email: new FormControl(this.profileInfo.email, [
  				Validators.required,
  				Validators.email
  			]),
  			password: new FormControl(this.profileInfo.password, [
  				Validators.required,
  				Validators.minLength(7)
  			]),
  			confirmPassword: new FormControl(this.profileInfo.confirmPassword, [
  				Validators.required,
  				Validators.minLength(7)
  			]),
  		})
  	}

  	onProfileSave() {

  		if (
  			this.profileInfo.name === this.form.value.name &&
  			this.profileInfo.email === this.form.value.email &&
  			this.profileInfo.password === this.form.value.password &&
  			this.profileInfo.confirmPassword === this.form.value.confirmPassword
  		) { 
  			this.isInfoChanged = false 
  		} else { 
  			this.isInfoChanged = true 
  		}

  		if (this.isInfoChanged) {

  			this.profileInfoService.setProfileInfo('name', this.form.value.name)
			this.profileInfoService.setProfileInfo('email', this.form.value.email)
			this.profileInfoService.setProfileInfo('password', this.form.value.password)
			this.profileInfoService.setProfileInfo('confirmPassword', this.form.value.confirmPassword)

  			this.isInfoChanged = false 
  		}

  	}

  	onProfileCancel() {

  		if (
  			this.profileInfo.name === this.form.value.name &&
  			this.profileInfo.email === this.form.value.email &&
  			this.profileInfo.password === this.form.value.password &&
  			this.profileInfo.confirmPassword === this.form.value.confirmPassword
  		) { 
  			this.isInfoChanged = false 
  		} else { 
  			this.isInfoChanged = true 
  		}

  		if (this.isInfoChanged) {

  			this.form = new FormGroup({
	  			name: new FormControl(this.profileInfo.name, []),
	  			email: new FormControl(this.profileInfo.email, []),
	  			password: new FormControl(this.profileInfo.password, []),
	  			confirmPassword: new FormControl(this.profileInfo.confirmPassword, []),
	  		})

  		}

  	}

}
