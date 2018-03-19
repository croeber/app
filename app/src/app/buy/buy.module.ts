import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarsService } from '../home/cars.service';
import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { DxFormModule, DxTextAreaModule, DxButtonModule, DxToastModule, DxLinearGaugeModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BuyRoutingModule,
    DxFormModule,
    DxTextAreaModule,
    DxButtonModule,
    DxToastModule,
    DxLinearGaugeModule
  ],
  declarations: [
    BuyComponent
  ],
  providers: [
    CarsService
  ]
})
export class BuyModule { }
