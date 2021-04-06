import { Observable } from 'rxjs';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../dto/vehicle';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];

  @Output() vehicleDeleteEvent = new EventEmitter<number>();

  constructor(private vehicleService: VehicleService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }
  getRequestParams( page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }
  reloadData(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.vehicleService.getVehicleList(params)
      .subscribe(
        response => {
          const { content, totalElements } = response;
          this.vehicles = content;
          this.count = totalElements;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.vehicleDeleteEvent.emit(id);
        },
        error => console.log(error));
  }

  vehicleDetails(id: number): void{
    this.router.navigate(['vehicles/details', id]);
  }

  updateVehicle(id: number): void{
    this.router.navigate(['vehicles/update', id]);
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.reloadData();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.reloadData();
  }
}
