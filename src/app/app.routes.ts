import { Routes } from '@angular/router';
import { TodaytasksComponent } from './todaytasks/todaytasks.component';
import { CalendarpageComponent } from './calendarpage/calendarpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

export const routes: Routes = [
    {
        path: "",
        component: TodaytasksComponent
    },
    {
        path: "calendar",
        component: CalendarpageComponent
    },
    {
        path: "search",
        component: SearchpageComponent
    }
];
