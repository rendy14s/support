import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { VMDAboutUsApi } from './../../shared/sdk/services/custom/VMDAboutUs';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public dataCompany: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public vmdAboutUsApi: VMDAboutUsApi
  ) {
  }

  ionViewDidLoad() {
    this.vmdAboutUsApi.find().subscribe((result) => {
      console.log(result);
      this.dataCompany = result;
    })
  }

  presentModal() {
    let modal = this.modalCtrl.create("EditprofilPage");
    modal.present();
  }
  
  editprofil(){
    this.navCtrl.push('EditprofilPage');
  }
  Edit() {
    this.navCtrl.push('EditAboutusPage');
  }
 
}