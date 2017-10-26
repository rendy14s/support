import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';

/**
 * Generated class for the BookingSystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-system',
  templateUrl: 'booking-system.html',
})
export class BookingSystemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad bookingSystemPage');
  }
  booking() {
    this.navCtrl.push('GreetingPage');
}

  gogreeting() {
    this.navCtrl.push('bookingSystemPage'); //PUNYA WANTEK BELOM KELAR
  }
}
