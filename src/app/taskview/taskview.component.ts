import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../constants';
import { CheckboxModule } from 'primeng/checkbox';
import { Task } from '../todaytasks/todaytasks.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const taskTypeIcons: { [key: string]: string } = {
  'Overdue': 'pi pi-exclamation-circle',
  'Upcoming': 'pi pi-clock',
  'Completed': 'pi pi-check-circle'
};


@Component({
  selector: 'app-taskview',
  standalone: true,
  imports: [
    CheckboxModule,
    ProgressBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './taskview.component.html',
  styleUrl: './taskview.component.scss'
})
export class TaskviewComponent implements OnInit {
  @Input() taskType: 'Overdue' | 'Upcoming' | 'Completed' = "Overdue";
  @Input() task: Task | null = null

  taskIcon: string = '';
  cetegories = Categories;
  completedTasks: { number: number, array: boolean[] } = { number: 0, array: [] };


  ngOnInit(): void {
    this.taskIcon = this.getIconForType(this.taskType);
    this.completedTasks = {
      number: this.task?.completed_tasks.filter(value => value === true).length || 0,
      array: this.task?.completed_tasks || []
    };
  }

  onChangeTask(index: number) {
    this.completedTasks.array[index] = !this.completedTasks.array[index]
    this.completedTasks.number = this.completedTasks.array.filter(value => value === true).length || 0
    console.log(this.completedTasks)
  }

  getIconForType(type: 'Overdue' | 'Upcoming' | 'Completed'): string {
    return taskTypeIcons[type] || 'pi pi-question'; // Icono por defecto si no se encuentra
  }
}
