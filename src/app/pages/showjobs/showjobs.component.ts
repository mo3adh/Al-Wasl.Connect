import { Component, OnInit } from '@angular/core';
import { Job } from 'app/models/job_request';
import { HttpService } from "../../http.service";


@Component({
  selector: 'app-showjobs',
  templateUrl: './showjobs.component.html',
  styleUrls: ['./showjobs.component.css']
})
export class ShowjobsComponent implements OnInit {
  jobs:Job[];

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getJobs().subscribe((results) => {
      this.jobs = results['data'];
    })
  }

}
