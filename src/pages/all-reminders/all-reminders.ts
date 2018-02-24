import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { NewReminderPage } from '../new-reminder/new-reminder';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AllRemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-reminders',
  templateUrl: 'all-reminders.html',
})
export class AllRemindersPage {

  reminders: {
    id: number,
    name: string,
    description: string,
    time: string,
    days: {
      name: string,
      selected: boolean
    }[]
  }[]


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events) {

    events.subscribe('reminders:created', (reminderToSave) => {

      this.reminders.push(reminderToSave);
    })

    events.subscribe('reminders:updated', (reminderToUpdate) => {

      this.reminders = this.reminders.filter(reminder => reminder.id != reminderToUpdate.id)
      this.reminders.push(reminderToUpdate)

    })
    this.storage.get("reminders").then(allreminders => {
      this.reminders = allreminders;

    })
  }

  openReminder(reminder) {

    console.log(reminder);
    this.navCtrl.push(NewReminderPage, reminder)
//stack
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRemindersPage');
  }

  newReminder(){

    this.navCtrl.push(NewReminderPage)
  }

  deleteReminder(reminderToDelete){
    this.reminders = this.reminders.filter(reminder => reminder.id != reminderToDelete.id)

    this.storage.set("reminders", this.reminders)
  }
}
