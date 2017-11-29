// Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';


import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  nextPage =  TabsPage;

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

//Navigates user to Tabs if succesfully authenticated login, otherwise pushes user to register page.
async login(user : User) {
  try {
   const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
   
      if(result) {     
   this.navCtrl.setRoot('TabsPage')
   }
 }
catch (e) {
   
  this.navCtrl.push('RegisterPage');
   
   
 }
 
 }

 
//Navigates user to register page
 register() {
   this.navCtrl.push('RegisterPage')
 }
 
 
//Skips validation and straight to home page (for teacher just in case)
 altlogin() {
   this.navCtrl.push('TabsPage')
 }
}