import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewReminderPage } from './new-reminder';

@NgModule({
  declarations: [
    NewReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(NewReminderPage),
  ],
})
export class NewReminderPageModule {}
