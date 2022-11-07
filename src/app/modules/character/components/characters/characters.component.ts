import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {map} from "rxjs";

import {ICharacter, ICharacterPrimary} from "../../interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit,AfterViewInit {
characters:ICharacter[];
total_pages:number;

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
  map(value => value["data"] as ICharacterPrimary)
).subscribe((value) => {
    this.characters = value.results;
    this.total_pages =value.info.count
})
  }

}
