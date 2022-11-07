import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ILocation} from "../../interfaces";
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
location:ILocation;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({location})=>this.location = location)

  }

}
