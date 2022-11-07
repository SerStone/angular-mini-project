import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ILocation} from "../../interfaces";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
@Input()
location:ILocation;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
  }
  getDetails():void {
    this.router.navigate([this.location.id],{relativeTo: this.activatedRoute})
  }
}
