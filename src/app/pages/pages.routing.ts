import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
            { path: 'add-courses', loadChildren: './add-courses/add-courses.module#AddCoursesModule' },
            { path: 'edit-courses', loadChildren: './edit-courses/edit-courses.module#EditCoursesModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
