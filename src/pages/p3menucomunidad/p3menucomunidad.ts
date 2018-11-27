import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { P4menuactoresPage } from '../p4menuactores/p4menuactores';

/**
 * Generated class for the P3menucomunidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p3menucomunidad',
  templateUrl: 'p3menucomunidad.html',
})
export class P3menucomunidadPage {

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Áreas La Candelaria',
      buttons: [
        {
          text: 'Salud',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Educación',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Trabajo social',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Transporte',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Vivienda',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Urbanismo',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Medio ambiente',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Seguridad',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Servicios públicos',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Justicia',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Juventud',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Adulto mayor',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Deporte',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Atención al ciudadano',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Mapas',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Oferta cultural',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Patrimonio cultural',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Gastronomía',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Eventos',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Innovación',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Centros comerciales',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Empresas e industrias',
          handler: () => {
            console.log('Archive clicked');
          }
        }
        ,{
          text: 'Salir',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  irp4actores(): void{
    this.navCtrl.push(P4menuactoresPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad P3menucomunidadPage');
  }

}
