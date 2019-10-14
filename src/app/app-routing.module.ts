import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import { MainPageComponent } from './main-page/main-page.component'
import { StuffItemPageComponent } from './stuff-item-page/stuff-item-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthGuard } from './shared/guards/auth.guard'
import { StorePageComponent } from './store-page/store-page.component'
import { PaymentSuccessPageComponent } from './payment-success-page/payment-success-page.component'
import { ProfilePageComponent } from './profile-page/profile-page.component'

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent, children: [
			{path: '', redirectTo: '/', pathMatch: 'full'},
			{path: '', component: MainPageComponent},
			{path: 'stuff-item/:id', component: StuffItemPageComponent},
			{path: 'login', component: LoginPageComponent},
			{path: 'store', component: StorePageComponent},
			{path: 'payment-success', component: PaymentSuccessPageComponent},
			{path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
			// {path: 'profile', component: ProfilePageComponent},
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
