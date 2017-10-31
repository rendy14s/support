import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
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
  fullname: any;
  address: any;
  application: any;
  description: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public VMDBooking: VMDBookingApi ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad bookingSystemPage');
  }
  booking() {
    this.VMDBooking.create({
      fullname: this.fullname,
      address: this.address,
      application: this.application,
      description: this.description
    })  .subscribe ((result)=>{
      console.log(result);
    })
    // this.navCtrl.push('GreetingPage');
}

  // gogreeting() {
  //   this.navCtrl.push('BookingSystemPage'); //PUNYA WANTEK BELOM KELAR
  // }
}
