import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  {
    path: 'stock-list',
    component: StockListComponent,
  },
  {
    path: 'stock-details',
    component: StockDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'stock-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
