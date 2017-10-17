import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IosPage } from './ios';

@NgModule({
  declarations: [
    IosPage,
  ],
  imports: [
    IonicPageModule.forChild(IosPage),
  ],
})
export class IosPageModule {}
