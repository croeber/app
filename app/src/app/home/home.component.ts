import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CarsService, Car, QualityIndicator } from './cars.service';
import { isTSThisType } from 'babel-types';
import { find } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isItemNull = true;
  tileViewDataSource: Array<Car> = [];
  selectedItem: Car = new Car();
  overallValue: string;
  mechanicalValue: string;
  powertrainValue: string;
  constructor(private carsService: CarsService, private router: Router) { }
  onListItemClick(e: any) {
      switch (e.itemIndex) {
        case 0:
          this.router.navigate(['/buy', this.selectedItem.id ], { replaceUrl: true });
          break;
        default:
          alert('Only Buy or Bid is Implemented');
          break;
      }
  }
  setRatings() {
    this.isItemNull = this.selectedItem && this.selectedItem.model && this.selectedItem.model.length > 0 ? false : true;
    const overall = find<QualityIndicator>(this.selectedItem.quality, { name: 'overall' });
    if (overall && overall.rating) {
      this.overallValue = overall.rating;
    }
    const mechanical = find<QualityIndicator>(this.selectedItem.quality, { name: 'mechanical' });
    if (mechanical && mechanical.rating) {
      this.mechanicalValue = mechanical.rating;
    }
    const powertrain = find<QualityIndicator>(this.selectedItem.quality, { name: 'powertrain' });
    if (powertrain && powertrain.rating) {
      this.powertrainValue = powertrain.rating;
    }
  }
  onItemClick(e: any) {
    this.selectedItem = this.tileViewDataSource[e.itemIndex];
    this.setRatings();
  }

  ngOnInit() {
    this.carsService.getCars()
      .subscribe((res: Array<Car>) => {
        this.tileViewDataSource = res;
        if (this.tileViewDataSource.length > 0) {
          this.selectedItem = this.tileViewDataSource[0];
          this.setRatings();
        }
      });
  }

}
