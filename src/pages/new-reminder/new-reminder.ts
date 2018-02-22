import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { PageTransition } from 'ionic-angular/transitions/page-transition';
import { AllRemindersPage } from '../all-reminders/all-reminders';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-reminder',
  templateUrl: 'new-reminder.html',

})
export class NewReminderPage {

  id: number = null;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events) {
    if (this.navParams.data.id) {
      console.log(this.navParams)
      this.name = this.navParams.data.name
      this.days = this.navParams.data.days
      this.time = this.navParams.data.time
      this.description = this.navParams.data.description
      this.id = this.navParams.data.id
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewReminderPage');
  }

  save() {

    if (this.id == null) {
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
          this.storage.set('reminders', reminders).then(() => {
          
            this.events.publish('reminders:created', reminderToSave);

            this.navCtrl.pop();
          });
       
        })
      }) 
    }
    else {
      this.storage.get("reminders").then(reminders => {

        for (let i = 0; i < reminders.length; i++) {

          if (reminders[i].id == this.id) {
            reminders[i].name = this.name;
            reminders[i].description = this.description;
            reminders[i].days = this.days;
            reminders[i].time = this.time;

            break
          }
        }
        this.storage.set("reminders", reminders).then(()=>{
          let reminderToUpdate = {
            id: this.id,
            name: this.name,
            description: this.description,
            time: this.time,
            days: this.days
          }
          this.events.publish('reminders:updated', reminderToUpdate);
          this.navCtrl.pop();
        });

      
      })
    }
  }
}

//import + constructor 