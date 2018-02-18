import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllRemindersPage } from './all-reminders';

@NgModule({
  declarations: [
    AllRemindersPage,
  ],
  imports: [
    IonicPageModule.forChild(AllRemindersPage),
  ],
})
export class AllRemindersPageModule {}
