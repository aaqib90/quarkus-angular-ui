import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplistComponent } from './applist/applist.component';
import { TabledataComponent } from './tabledata/tabledata.component';

const routes: Routes = [
  { path: '', component: TabledataComponent },
  {  path: 'allapp', component: ApplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
