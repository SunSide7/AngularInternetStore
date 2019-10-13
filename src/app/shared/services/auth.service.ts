import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class AuthService {
	private isAuth = false

	login() {
		this.isAuth = true
		console.log("Service worked! Auth:", this.isAuth)
	}

	logout() {
		this.isAuth = false
		console.log("Service worked! Auth:", this.isAuth)
	}

	isAuthenticated(): Promise<boolean> {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.isAuth)
			}, 1000)
		})
	}
}