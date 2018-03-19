import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { BuyComponent } from './buy.component';

const routes: Routes = [
  Route.withShell([
    { path: 'buy/:id', component: BuyComponent, data: { title: extract('Buy') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BuyRoutingModule { }
