import { Component, OnInit } from '@angular/core';
import { Donation } from 'app/models/donation';

@Component({
  selector: 'app-indivisual',
  templateUrl: './indivisual.component.html',
  styleUrls: ['./indivisual.component.css']
})
export class IndivisualComponent implements OnInit {

  donation:Donation = {
    ammount: null,
    email: null,
    fullName: null,
    id: null,
    phone: null,
  };


  constructor() { }

  ngOnInit(): void {
  }

  showName():void {
    console.log(this.donation);
  }

}
