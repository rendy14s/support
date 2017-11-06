import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the BookingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.html',
})
export class BookingListPage {

  public namefull: any;
  public alamat: any;
  public judulaplikasi: any;
  public descriptionapp: any;
  public userid: any;
  public viewdata: any;
  public iduser: any;
  public id: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public VMDBooking: VMDBookingApi,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result, 'Result Storage');
      this.userid = result;
      this.iduser = this.userid.user.id;
      console.log(this.iduser, 'ID User');
      this.VMDBooking.find({
        where: {
          idUser: this.iduser
        }
      }).subscribe((result) => {
        console.log(result, 'Result Booking');
        this.viewdata = result;
      })
    })
  }
}