import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CourseraCoursesComponent } from './components/coursera-courses/coursera-courses.component';
import { EdxCoursesComponent } from './components/edx-courses/edx-courses.component';
import { FuturelearnCoursesComponent } from './components/futurelearn-courses/futurelearn-courses.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'all-courses', component: AllCoursesComponent },
            { path: 'coursera-courses', component: CourseraCoursesComponent },
            { path: 'edx-courses', component: EdxCoursesComponent },
            { path: 'futurelearn-courses', component: FuturelearnCoursesComponent }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
