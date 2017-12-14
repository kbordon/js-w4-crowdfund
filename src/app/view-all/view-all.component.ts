import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Charity } from '../charity.model';
import { VenturesService } from '../ventures.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
  providers: [VenturesService]
})
export class ViewAllComponent implements OnInit {
  ventures: FirebaseListObservable<any[]>;

  constructor(private venturesService: VenturesService) { }

  ngOnInit() {
    this.ventures = this.venturesService.getVentures();
    console.log(this.ventures);
  }

}
