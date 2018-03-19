import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DxTileViewModule, DxCircularGaugeModule, DxListModule } from 'devextreme-angular';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarsService } from './cars.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    DxTileViewModule,
    DxCircularGaugeModule,
    DxListModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    CarsService
  ]
})
export class HomeModule { }
