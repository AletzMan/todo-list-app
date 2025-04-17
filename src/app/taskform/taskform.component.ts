import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessagesModule } from 'primeng/messages';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component, OnInit } from '@angular/core';
import { CategoriesArray, TasksArray } from '../../utils/constants';
import { DropdownModule } from 'primeng/dropdown';
import { Task } from '../pages/todaytasks-page/todaytasks-page.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ButtonModule,
    InputTextModule,
    FloatLabelModule,
    MessagesModule,
    ReactiveFormsModule,
    CalendarModule,
    CardModule,
    MessageModule,
    InputTextareaModule,
    DropdownModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.scss'
})
export class TaskformComponent implements OnInit {

  today = new Date();
  messageTask: Message[] = [];
  messageErrorTask: string = "Field is required";
  messageErrorDescription: string = "Field is required";
  userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera || undefined
  categories = CategoriesArray.filter(category => category.name !== "Show all");

  taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });
  isValid: boolean = false;
  pipe = new DatePipe('en-US')

  ngOnInit() {
    const response = this.isMobileDevice()
    console.log(response)
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Lógica para crear la tarea
      this.isValid = true;
      this.messageTask = [{ severity: 'success', summary: 'Success', detail: 'Task created successfully' }];
      this.taskForm.reset();
    } else {
      this.isValid = false;
    }
  }
  onClose() {
    this.isValid = false;
    this.taskForm.reset();
  }

  onChange(type: "task" | "description") {
    const errors = this.taskForm.get(type)?.errors;
    if (errors) {
      if (type === "task") {
        if (errors['required']) {
          this.messageErrorTask = 'Field is required';
        } else if (errors['minlength']) {
          this.messageErrorTask = 'Task must be at least 3 characters long';
        }
      }
      if (type === "description") {
        if (errors['required']) {
          this.messageErrorDescription = 'Field is required';
        } else if (errors['minlength']) {
          this.messageErrorDescription = 'Description must be at least 20 characters long';
        }
      }
    }
  }

  onCreateTask() {
    let date = new Date(this.taskForm.controls['date'].value)
    const format = this.pipe.transform(date, 'yyyy-MM-dd');
    const newTask: Task = {
      category: this.taskForm.controls['category'].value.key,
      completed_tasks: [false],
      date: format as string,
      name: this.taskForm.controls['task'].value,
      status: "Overdue",
      sub_tasks: [{
        id: 'wrok-1',
        label: this.taskForm.controls['description'].value,
        name: this.taskForm.controls['description'].value
      }]
    }

    TasksArray.unshift(newTask);
  }

  onCleanForm() {
    this.taskForm.reset();
    this.isValid = false;
    this.messageTask = [];
    this.messageErrorTask = "Field is required";
  }

  isMobileDevice = (): boolean => {
    const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i]
    return regexs.some((b) => this.userAgent.match(b))
  }
}
