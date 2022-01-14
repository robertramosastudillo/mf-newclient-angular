import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfNewClientContentRoutingModule } from './mf-new-client-content-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [CommonModule, MfNewClientContentRoutingModule],
})
export class MfNewClientContentModule {}
