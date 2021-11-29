import { NgModule } from '@angular/core';
import { ResortService } from './service/resort.service';
import { RouterModule } from '@angular/router';
import { ResortAddComponent } from './resort-add/resort-add.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { ResortDetailsComponent } from './resort-details/resort-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', component: ResortListComponent, pathMatch: 'full' },
  { path: 'add', component: ResortAddComponent, pathMatch: 'full' },
  { path: 'details/:robotName', component: ResortDetailsComponent },
];

@NgModule({
  declarations: [
    ResortAddComponent,
    ResortListComponent,
    ResortDetailsComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [ResortService],
})
export class ResortModule {}
