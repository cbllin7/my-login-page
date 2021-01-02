import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
