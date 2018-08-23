import { BreadcrumbsService } from './../../services/breadcrumbs.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private _breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit() {
  }

}
