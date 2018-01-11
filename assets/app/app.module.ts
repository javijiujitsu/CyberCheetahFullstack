import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CareerComponent } from "./careers/career.component";
import { CareerListComponent } from "./careers/career-list.component";
import { AuthenticationComponent } from "./auth/authentication.component";


@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      CareerComponent,
      CareerListComponent,
      AuthenticationComponent

  ],

    imports: [
      BrowserModule,



    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
