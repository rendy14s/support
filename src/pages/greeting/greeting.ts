import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GreetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greeting',
  templateUrl: 'greeting.html',
})
export class GreetingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetingPage');
  }

<<<<<<< HEAD:src/pages/greeting/greeting.ts
  ok() {
    this.navCtrl.setRoot('HomePage');
}
=======
  produkdetail() {
    this.navCtrl.push('DetailprodukPage');
  }
>>>>>>> master:src/pages/ios/ios.ts
}

