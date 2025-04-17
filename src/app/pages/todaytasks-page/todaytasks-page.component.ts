import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { Categories, TasksArray } from '../../../utils/constants';
import { CheckboxModule } from 'primeng/checkbox';
import { TaskviewComponent } from '../../taskview/taskview.component';
import { TabMenuModule } from 'primeng/tabmenu';

export interface Task {
  name: string
  sub_tasks: { id: string; name: string; label: string }[]
  date: string
  category: Categories
  completed_tasks: boolean[]
  status: 'Overdue' | 'Upcoming' | 'Completed'
}

type Categories = 'work' | 'sport' | 'study' | 'social' | 'home' | 'shopping' | 'travel' | 'movie' | 'music';

@Component({
  selector: 'app-todaytasks',
  standalone: true,
  imports: [
    ProgressBarModule,
    CheckboxModule,
    TaskviewComponent,
    TabMenuModule
  ],
  templateUrl: './todaytasks-page.component.html',
  styleUrl: './todaytasks-page.component.scss'
})
export class TodaytasksPageComponent {

  selectedType: 'Overdue' | 'Upcoming' | 'Completed' = 'Overdue'

  items = [
    { label: 'Overdue ', icon: 'pi pi-calendar-times', command: () => { this.selectedType = "Overdue" } },
    { label: 'Upcoming ', icon: 'pi pi pi-hourglass', command: () => this.selectedType = "Upcoming" },
    { label: 'Completed ', icon: 'pi pi-check-square', command: () => this.selectedType = "Completed" },
  ]


  tasks: Task[] = TasksArray

}