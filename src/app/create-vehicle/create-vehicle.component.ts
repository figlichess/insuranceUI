import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../dto/vehicle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RiskParam} from '../dto/riskparam';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  submitted = false;

  constructor(private vehicleService: VehicleService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newVehicle(): void {
    this.submitted = false;
    this.vehicle = new Vehicle();
  }

  save(): void {
    this.vehicleService.createVehicle(this.vehicle)
      .subscribe(data => {
        console.log(data);
        this.vehicle = new Vehicle();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/insurance']);
  }
}
