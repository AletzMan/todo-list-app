import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TodaytasksComponent } from './todaytasks/todaytasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    OptionsComponent,
    TabMenuModule,
    TodaytasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedType: 'Overdue' | 'Upcoming' | 'Completed' = 'Overdue'

  items = [
    { label: 'Overdue ', icon: 'pi pi-calendar-times', command: () => { this.selectedType = "Overdue" } },
    { label: 'Upcoming ', icon: 'pi pi pi-hourglass', command: () => this.selectedType = "Upcoming" },
    { label: 'Completed ', icon: 'pi pi-check-square', command: () => this.selectedType = "Completed" },
  ]

}

