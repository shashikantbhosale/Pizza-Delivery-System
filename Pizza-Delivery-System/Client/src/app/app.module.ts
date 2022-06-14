import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './Services/auth.service';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PizzaHomeComponent,
    OrderComponent
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [LoginService,HttpClient,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
