import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VenturesService {
  ventures: FirebaseListObservable<any[]>;
  ideas: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;
  charities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.ventures = database.list('ventures', ref => ref.orderByChild('ideas'));
    // this.ideas = database.list('ideas');
    // this.charities = database.list('charities');
  }

  getIdeas(){
    return this.ideas;
  }

  getVentures(){
    return this.ventures;
  }

}
