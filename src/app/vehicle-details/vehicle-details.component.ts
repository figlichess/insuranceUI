import { Vehicle } from '../dto/vehicle';
import { Component, OnInit, Input } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

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

  list(): void {
    this.router.navigate(['/insurance']);
  }
}
