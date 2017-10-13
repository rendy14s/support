import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,  ModalController, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Your Account Have Been Save!',
      buttons: ['OK']
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
}
}