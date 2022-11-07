import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

import {IEpisode, IEpisodePrimary} from "../../interfaces";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit ,AfterViewInit {
  episodes: IEpisode[];
  page = 1
  total_items: number;
  @ViewChild(MatPaginator)
  paginator: MatPaginator

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private detectorRef: ChangeDetectorRef) {
  }


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
      map(value => value["episodes"] as IEpisodePrimary)
    ).subscribe((value) => {
      this.episodes = value.results;
      this.total_items = value.info.count
    })
  }

}
