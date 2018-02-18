import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { PageTransition } from 'ionic-angular/transitions/page-transition';
import { AllRemindersPage } from '../all-reminders/all-reminders';

/**
 * Generated class for the NewReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-reminder',
  templateUrl: 'new-reminder.html',

})
export class NewReminderPage {

  name: string;
  description: string;
  time: string = "12:00";

  days: { name: string, selected: boolean }[] = [

    { name: "Monday", selected: false },
    { name: "Tuesday", selected: false },
    { name: "Wednesday", selected: false },
    { name: "Thursday", selected: false },
    { name: "Friday", selected: false },
    { name: "Saturday", selected: false },
    { name: "Sunday", selected: false }
  ]




  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    if (this.navParams.data.id) {
      console.log(this.navParams)
      this.name = this.navParams.data.name
      this.days = this.navParams.data.days
      this.time = this.navParams.data.time
      this.description = this.navParams.data.description
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewReminderPage');
  }

  save() {

    this.storage.get("remindersId").then(remindersId => {

      if (remindersId == null) remindersId = 0;

      let reminderToSave = {
        id: ++remindersId,
        name: this.name,
        description: this.description,
        time: this.time,
        days: this.days


      }
      this.storage.set("remindersId", remindersId)
      console.log(reminderToSave)


      this.storage.get("reminders").then(reminders => {

        if (reminders == null) reminders = []
        reminders.push(reminderToSave)
        console.log(reminders);
        this.storage.set('reminders', reminders);
      })


    }

    )

  }
}


//import + constructor 