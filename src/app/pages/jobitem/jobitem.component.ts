import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'app/models/job_request';

@Component({
  selector: 'app-jobitem',
  templateUrl: './jobitem.component.html',
  styleUrls: ['./jobitem.component.css']
})
export class JobitemComponent implements OnInit {

  @Input() job:Job;

  constructor() { }

  ngOnInit(): void {
    console.log(this.job);
  }

}
