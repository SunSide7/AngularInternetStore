import { CanActivate, ActivateRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export class AuthGuard implements CanActivate {

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return null
	}

}