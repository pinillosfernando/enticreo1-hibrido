import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P3menucomunidadPage } from '../p3menucomunidad/p3menucomunidad';

/**
 * Generated class for the P2principalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2principal',
  templateUrl: 'p2principal.html',
})
export class P2principalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irp3menucomunidad(): void{
    this.navCtrl.push(P3menucomunidadPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P2principalPage');
  }

}
