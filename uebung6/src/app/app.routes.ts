import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Table } from './table/table';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home }, 
    { path: 'create', component: Form },
    { path: 'read', component: Table }
];
