import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'all-courses', component: AllCoursesComponent }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
