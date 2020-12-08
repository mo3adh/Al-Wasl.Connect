import { Component, OnInit } from '@angular/core';
import { Job } from "../../models/job_request";

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {
  jobRequest:Job
  = {
    address: '',
    bDate: new Date(),
    career: '',
    email: '',
    fullName: '',
    id: null,
    phone: null,
    skills: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  showName():void {
    console.log(this.jobRequest);
  }

}
