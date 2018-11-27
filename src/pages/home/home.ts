import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { P2principalPage } from '../p2principal/p2principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irp2principal(): void{
    this.navCtrl.push(P2principalPage);
  }

}
