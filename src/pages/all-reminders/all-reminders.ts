import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { NewReminderPage } from '../new-reminder/new-reminder';
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
    name: string,
    description: string,
    time: string,
    days: {
      name: string,
      selected: boolean
    }[]
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get("reminders").then(allreminders => {
      this.reminders = allreminders;

    })
  }

  openReminder(reminder) {

    console.log(reminder);
    this.navCtrl.push(NewReminderPage, reminder)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRemindersPage');
  }

}
