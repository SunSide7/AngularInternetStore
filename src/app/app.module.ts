import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StuffItemPageComponent } from './stuff-item-page/stuff-item-page.component';
import { StuffItemComponent } from './shared/components/stuff-item/stuff-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { StoreItemComponent } from './shared/components/store-item/store-item.component';

import { AuthService } from './shared/services/auth.service'
import { StuffAddService } from './shared/services/stuff-add.service';
  
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    StuffItemPageComponent,
    StuffItemComponent,
    LoginPageComponent,
    StorePageComponent,
    StoreItemComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    StuffAddService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
