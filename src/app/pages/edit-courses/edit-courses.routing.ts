import { Routes, RouterModule } from '@angular/router';
import { EditCoursesComponent } from './edit-courses.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditCoursesComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
