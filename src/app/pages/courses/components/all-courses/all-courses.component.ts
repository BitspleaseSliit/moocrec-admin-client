import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/coursesData.service';
// import { APIService } from '@sv/api.service';
import { APIService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._apiService.getAllCourses().subscribe(
      (data: any)=>{
        this.tableData = data.courses;
      },
      (error: any)=>{
        console.log('getAllCourses error : ', error);
      }
    )
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
