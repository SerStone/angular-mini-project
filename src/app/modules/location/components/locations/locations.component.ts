import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

import {ILocation, ILocationPrimary} from "../../interfaces";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit,AfterViewInit {
locations:ILocation[];
totalPages:number;

@ViewChild(MatPaginator)
paginator:MatPaginator
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private detectorRef:ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page - 1
      this.detectorRef.detectChanges()
    })
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}})
    })
  }
  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value["locations"] as ILocationPrimary)
    ).subscribe((value) => {
      this.locations = value.results;
      this.totalPages =value.info.count;
    })
  }


}
