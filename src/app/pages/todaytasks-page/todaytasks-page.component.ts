import { Component, OnInit } from '@angular/core';
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
export class TodaytasksPageComponent implements OnInit {

  selectedType: 'Overdue' | 'Upcoming' | 'Completed' = 'Overdue'

  items = [
    { label: 'Overdue ', icon: 'pi pi-calendar-times', command: () => { this.selectedType = "Overdue", this.tasks = TasksArray.filter(task => task.status === "Overdue") } },
    { label: 'Upcoming ', icon: 'pi pi pi-hourglass', command: () => { this.selectedType = "Upcoming", this.tasks = TasksArray.filter(task => task.status === "Upcoming") } },
    { label: 'Completed ', icon: 'pi pi-check-square', command: () => { this.selectedType = "Completed", this.tasks = TasksArray.filter(task => task.status === "Completed") } },
  ]


  tasks: Task[] = []


  ngOnInit() {
    this.tasks = TasksArray.filter(task => task.status === "Overdue")
  }

}