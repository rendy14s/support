import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { Storage } from '@ionic/storage';
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
  public fullname: any;
  public address: any;
  public application: any;
  public description: any;
  public id: any;
  public userid: any;
  public iduser: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public VMDBooking: VMDBookingApi,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.userid = result;
      this.iduser = this.userid.user.id;
    })
  }

  booking() {
    this.VMDBooking.create({
      idUser: this.userid.user.id,
      fullname: this.fullname,
      address: this.address,
      application: this.application,
      description: this.description,
    }).subscribe((result) => {
      console.log(result);
    })
    {
      let alert = this.alertCtrl.create({
        title: 'Berhasil',
        subTitle: 'Data Anda Telah Tersimpan',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.setRoot('PageProfileOnBookingPage');
            }
          }
        ]
      });
      alert.present();
    }
  }
}
