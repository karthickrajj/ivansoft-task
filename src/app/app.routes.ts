import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'add-book',component:AddBookComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'view-book',component:ViewBookComponent},
    {path:'delete-book',component:DeleteBookComponent}
];
