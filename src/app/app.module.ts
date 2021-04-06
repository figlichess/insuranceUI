import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { CreateRiskparamComponent } from './create-riskparam/create-riskparam.component';
import { RiskparamListComponent } from './riskparam-list/riskparam-list.component';
import { UpdateRiskparamComponent } from './update-riskparam/update-riskparam.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsuranceComponent } from './insurance/insurance.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    VehicleListComponent,
    UpdateVehicleComponent,
    CreateRiskparamComponent,
    RiskparamListComponent,
    UpdateRiskparamComponent,
    InsuranceComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
