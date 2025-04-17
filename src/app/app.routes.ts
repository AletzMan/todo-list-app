import { Routes } from '@angular/router';
import { TodaytasksPageComponent } from './pages/todaytasks-page/todaytasks-page.component';
import { CalendarpageComponent } from './pages/calendarpage/calendarpage.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: "",
        component: TodaytasksPageComponent
    },
    {
        path: "calendar",
        component: CalendarpageComponent
    },
    {
        path: "search",
        component: SearchPageComponent
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    }
];
