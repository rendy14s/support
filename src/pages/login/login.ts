import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { VMDUsercredentialApi } from './../../shared/sdk/services/custom/VMDUsercredential';
import { Storage } from '@ionic/storage';
import { CredentialUserApi } from './../../shared/sdk/services/custom/CredentialUser';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
          style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
          style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})

export class LoginPage {
  public logoState: any = "in";
  public cloudState: any = "in";
  public loginState: any = "in";
  public formState: any = "in";
  public username: any;
  public password: any;

  public dataLogin: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public VMDusercredentialApi: VMDUsercredentialApi,
    public storage: Storage,
    public alertCtrl: AlertController,
    public credentialUser: CredentialUserApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create("RegistrationPage");
    modal.present();
  }

  public login() {

    const data = {
      username: this.username,
      password: this.password,
      ttl: 60 * 60 * 24 * 30
    };

    console.log(data);
    this.credentialUser.login(data).subscribe((result) => {
      console.log(result);
    })
    // this.VMDusercredentialApi.find({
    //   where: {
    //     and: [
    //       { username: this.username },
    //       { password: this.password }
    //     ]
    //   }
    // }).subscribe((result) => {
    //   console.log(result);

    //   this.dataLogin = result;
    //   if(this.dataLogin.length == 1) {
    //     this.storage.set('Credential', result);
    //     this.navCtrl.setRoot('HomePage');
    //   } else {
    //     let alert = this.alertCtrl.create({
    //       subTitle: 'Ups.. Sorry! username or password maybe wrong',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   }
      
    // })
  }

}
