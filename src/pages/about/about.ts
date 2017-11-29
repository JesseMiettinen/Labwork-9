// Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
   selector: 'page-about',
   templateUrl: 'about.html'
})
export class AboutPage {
   todos = [];
   todo: string;
   

   constructor(public navCtrl: NavController) {
 

  }
  //Function for reordering treats
  reordertodos(indexes) {
    let element = this.todos[indexes.from];
    this.todos.splice(indexes.from, 1);
    this.todos.splice(indexes.to, 0, element);
  }
//Function for adding treats
   add() {
       this.todos.push(this.todo);
       this.todo = "";
   }
//Function for deleting treats
   delete(item) {
       var index = this.todos.indexOf(item, 0);
       if (index > -1) {
           this.todos.splice(index, 1);
       }
   }

   

   
}
