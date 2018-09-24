import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/coursesData.service';
import { APIService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-edx-courses',
  templateUrl: './edx-courses.component.html',
  styleUrls: ['./edx-courses.component.scss'],
  providers: [CoursesDataService]
})
export class EdxCoursesComponent implements OnInit {
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _coursesDataService: CoursesDataService, private _apiService: APIService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._apiService.getEdxCourses().subscribe(
      (data: any)=>{
        this.tableData = data.courses;
      },
      (error: any)=>{
        console.log('getEdxCourses error : ', error);
      }
    )
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
