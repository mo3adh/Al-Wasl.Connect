import { Component, OnInit } from '@angular/core';
import { Donation } from 'app/models/donation';
import { HttpService } from "../../http.service";


@Component({
  selector: 'app-honorwall',
  templateUrl: './honorwall.component.html',
  styleUrls: ['./honorwall.component.css']
})
export class HonorwallComponent implements OnInit {

  constructor(private httpService:HttpService) { }
  donations:Donation[];

  ngOnInit(): void {
    this.httpService.getDonations().subscribe((results) => {
      this.donations = results['data'];
    });
  }

}
