import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GettingStartedPageRoutingModule } from './getting-started-routing.module';

import { GettingStartedPage } from './getting-started.page';
import { InfoElementComponent } from './info-element';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GettingStartedPageRoutingModule,
  ],
  declarations: [GettingStartedPage, InfoElementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GettingStartedPageModule {}
