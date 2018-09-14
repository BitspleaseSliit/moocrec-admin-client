import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './courses.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CourseraCoursesComponent } from './components/coursera-courses/coursera-courses.component';

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        CoursesComponent,
        AllCoursesComponent,
        CourseraCoursesComponent
    ]
})
export class CoursesModule { }
