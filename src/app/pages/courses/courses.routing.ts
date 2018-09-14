import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CourseraCoursesComponent } from './components/coursera-courses/coursera-courses.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'all-courses', component: AllCoursesComponent },
            { path: 'coursera-courses', component: CourseraCoursesComponent }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
