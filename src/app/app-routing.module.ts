import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import {InsuranceComponent} from './insurance/insurance.component';
import {RiskparamListComponent} from './riskparam-list/riskparam-list.component';
import {CreateRiskparamComponent} from './create-riskparam/create-riskparam.component';
import {UpdateRiskparamComponent} from './update-riskparam/update-riskparam.component';

const routes: Routes = [
  { path: '', redirectTo: 'insurance', pathMatch: 'full' },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'riskparams/list', component: RiskparamListComponent },
  { path: 'riskparams/add', component: CreateRiskparamComponent },
  { path: 'riskparams/update/:id', component: UpdateRiskparamComponent },
  { path: 'vehicles/list', component: VehicleListComponent },
  { path: 'vehicles/add', component: CreateVehicleComponent },
  { path: 'vehicles/update/:id', component: UpdateVehicleComponent },
  { path: 'vehicles/details/:id', component: VehicleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
