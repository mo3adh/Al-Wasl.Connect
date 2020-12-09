import { Component, OnInit } from '@angular/core';
import { Job } from "../../models/job_request";
import { Router } from '@angular/router';
import { HttpService } from "../../http.service";

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {
  job:Job
  = {
    address: '',
    bDate: "'12/10/2020'",
    career: '',
    email: '',
    name: '',
    ID: 10,
    phone: null,
    skills: ''
  };


  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {

  }

  createJob():void {
    this.http.createJobRequest(this.job).subscribe((results)=>{console.log(results)});
  }

  onSubmit() {
    this.router.navigate(['/donor']);
    this.createJob();
  }

}
