import { Routes } from '@angular/router';
import { TodaytasksComponent } from './todaytasks/todaytasks.component';
import { CalendarpageComponent } from './pages/calendarpage/calendarpage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

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
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    }
];
