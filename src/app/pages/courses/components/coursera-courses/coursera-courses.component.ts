import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/coursesData.service';
import { APIService } from '../../../../shared/services/api.service';

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

  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._apiService.getCourseraCourses().subscribe(
      (data: any)=>{
        this.tableData = data.courses;
      },
      (error: any)=>{
        console.log('getCourseraCourses error : ', error);
      }
    )
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
