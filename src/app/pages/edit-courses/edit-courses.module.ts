import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edit-courses.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditCoursesComponent } from './edit-courses.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        EditCoursesComponent
    ]
})
export class EditCoursesModule { }
