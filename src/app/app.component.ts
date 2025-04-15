import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { TodaytasksComponent } from './todaytasks/todaytasks.component';
import { CalendarpageComponent } from './calendarpage/calendarpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    OptionsComponent,
    /*TodaytasksComponent*/
    CalendarpageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

