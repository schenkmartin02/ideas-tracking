import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth-interceptor.service";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AuthModule {
}
