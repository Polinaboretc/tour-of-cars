import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarApiService } from './services/car-api.service';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carsArray: Car[] = [];
  selectedCar?: Car;

  constructor(private carService: CarApiService, private messageService: MessageService) { }


  ngOnInit(): void {
    // this.carService.getCars().subscribe({
    //   next: cars => this.carsArray = cars,
    //   error: error => console.log('aiuto')
    this.getCars();
  }

  openDetail(car: Car){
    this.selectedCar = car;
    this.messageService.add(`CarsComponent: Selected car id=${car.id}`);
  }

  getCars(): void {
    this.carService.getCars()
        .subscribe(cars => this.carsArray = cars);
  }
}
