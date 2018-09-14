import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from './coursesData.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
  providers: [CoursesDataService]
})
export class DataTableComponent implements OnInit {
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _coursesDataService: CoursesDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tableData = this._coursesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
