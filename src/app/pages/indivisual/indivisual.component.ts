import { Component, OnInit } from '@angular/core';
import { Donation } from 'app/models/donation';
import { HttpService } from "../../http.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-indivisual',
  templateUrl: './indivisual.component.html',
  styleUrls: ['./indivisual.component.css']
})
export class IndivisualComponent implements OnInit {

  donation:Donation = {
    ammount: null,
    email: null,
    name: null,
    ID: 1,
    phone: null,
  };


  constructor(private httpService:HttpService, private router:Router) { }

  ngOnInit(): void {
  }

  showName():void {
    console.log(this.donation);
  }

  onsubmit():void {
    // this.showName();
    this.httpService.createDonation(this.donation).subscribe((results) => {
      console.log(results);
    });
    this.router.navigate(['/donor']);
  }

}
