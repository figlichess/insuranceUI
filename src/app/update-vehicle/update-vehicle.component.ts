import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../dto/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';
import {RiskParam} from '../dto/riskparam';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: number;
  vehicle: Vehicle;

  constructor(private route: ActivatedRoute, private router: Router,
              private vehicleService: VehicleService) { }

  ngOnInit(): void  {
    this.vehicle = new Vehicle();
    const vehId = 'id';
    this.id = this.route.snapshot.params[vehId];

    this.vehicleService.getVehicle(this.id)
      .subscribe(data => {
        console.log(data);
        this.vehicle = data;
      }, error => console.log(error));
  }

  updateVehicle(): void {
    this.vehicleService.updateVehicle(this.id, this.vehicle)
      .subscribe(data => {
        console.log(data);
        this.vehicle = new Vehicle();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void  {
    this.updateVehicle();
  }

  gotoList(): void  {
    this.router.navigate(['/insurance']);
  }
}
