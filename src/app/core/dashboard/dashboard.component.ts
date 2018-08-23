import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  breadcrumbs = [
    { link: '/', title: 'Dashboard' },
  ];

  constructor(
    private _dashboard: DashboardService,
    private _breadcrumbsService: BreadcrumbsService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
}
