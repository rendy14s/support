import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public role: any;
  
  constructor(public navCtrl: NavController,
     public actionSheetCtrl: ActionSheetController,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController,
     public modalCtrl: ModalController,
     public toastCtrl: ToastController) {
       this.presentLoading();
     }

     presentToast() {
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 800
      });
      toast.present();
    }
    
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 800
    });
    loader.present();
  }
  presentModal() {
    let modal = this.modalCtrl.create("DetailPage");
    modal.present();
  }
}