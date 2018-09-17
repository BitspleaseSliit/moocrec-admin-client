import { Routes, RouterModule } from '@angular/router';
import { AddCoursesComponent } from './add-courses.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddCoursesComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
