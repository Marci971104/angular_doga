import { FormBuilder, FormGroup } from '@angular/forms';
import { VehiclesService } from './../shared/vehicles.service';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  registerForm !: FormGroup;
  vehicle !: any;

  constructor(

    private auth: AuthService,
    private vehicles: VehiclesService,
    private formBuilder: FormBuilder

    ) {}

  ngOnInit(): void {
    this.getVehicles();
    this.registerForm = this.formBuilder.group({
      plate:[''],
      brand: [''],
      year:[''],
      price:[''],
      sold:['']
    });
  }
  addVehicle() {
    let plate = this.registerForm.value.plate;
    let brand = this.registerForm.value.brand;
    let year = this.registerForm.value.year;
    let price = this.registerForm.value.price;
    let sold = this.registerForm.value.sold;

    this.vehicles.addVehicle(plate, brand, year, price,sold).subscribe((res) => {
      console.log(res);
      
      this.getVehicles();
  });
  }

  logout(){
    this.auth.logout();
  }


  getVehicles(){
    this.vehicles.getVehicles()
    .subscribe(res => {
    console.log(res);
    this.vehicle = res;
    })
  }
 
 
 
  

  
 
}


