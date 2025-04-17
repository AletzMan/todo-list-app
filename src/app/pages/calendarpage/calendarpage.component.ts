import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TaskviewComponent } from "../../taskview/taskview.component";
import { Task } from '../../todaytasks/todaytasks.component';
import { DatePipe, formatDate } from '@angular/common';
import localeES from "@angular/common/locales/es";
import { TasksArray } from '../../../utils/constants';

@Component({
  selector: 'app-calendarpage',
  standalone: true,
  imports: [
    CalendarModule,
    ReactiveFormsModule,
    TaskviewComponent
  ],
  templateUrl: './calendarpage.component.html',
  styleUrl: './calendarpage.component.scss'
})
export class CalendarpageComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    date: new FormControl<Date | null>(new Date())
  });

  tasks: Task[] = TasksArray

  pipe = new DatePipe('en-US')
  filterTasks: Task[] = []

  onSelectDate() {
    let date = new Date(this.formGroup.value.date)
    const format = this.pipe.transform(date, 'yyyy-MM-dd');
    this.filterTasks = this.tasks.filter(newTasks => newTasks.date === format)
  }

  ngOnInit() {
    this.onSelectDate()
  }



}
