// Jesse Miettinen 1601555

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  user = {} as User;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    
    public navCtrl: NavController, public navParams: NavParams ) {

  }
}
