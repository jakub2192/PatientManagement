import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {PatientService} from './patient.service';
import {FileSelectDirective} from 'ng2-file-upload';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientDetailComponent,
    FileSelectDirective
  ],
  providers: [PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
