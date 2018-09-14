import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/coursesData.service';

@Component({
  selector: 'app-coursera-courses',
  templateUrl: './coursera-courses.component.html',
  styleUrls: ['./coursera-courses.component.scss'],
  providers: [CoursesDataService]
})
export class CourseraCoursesComponent implements OnInit {
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
