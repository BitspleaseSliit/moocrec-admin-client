import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './add-courses.routing';
import { SharedModule } from '../../shared/shared.module';
import { AddCoursesComponent } from './add-courses.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        AddCoursesComponent
    ]
})
export class AddCoursesModule { }
