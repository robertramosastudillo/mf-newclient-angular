import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { MfNewClientContentComponent } from './mf-new-client-content.component';

const routes: Routes = [
  {
    path: '',
    component: MfNewClientContentComponent ,
    children:[
      {
        path: '',
        component: HomeViewComponent,
      },
      { path: '**', component: HomeViewComponent }
    ]
  },
  { path: '**', component: MfNewClientContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfNewClientContentRoutingModule { }
