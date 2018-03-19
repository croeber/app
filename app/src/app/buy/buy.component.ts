import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService, Details } from '../home/cars.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit, OnDestroy {
  id: string;
  message: string;
  isToastVisible = false;
  details: Details;
  values: any = {};
  private sub: any;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }
  onEditorEnterKey(e: any) {
    this.submit();
  }
  customizeText(e: any) {

  }
  submit() {
    this.isToastVisible = true;
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.carsService.getDetails(this.id)
        .subscribe((res: Details) => {
          this.details = res;
          this.values = {};
          this.details.quality.forEach(c => {
            if (!this.values[c.name]) {
              this.values[c.name] = c.rating;
            }
          });
        });
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
