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
import { Component } from '@angular/core';

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
    InputTextareaModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.scss'
})
export class TaskformComponent {
  messageTask: Message[] = [];
  messageErrorTask: string = "Field is required";
  messageErrorDescription: string = "Field is required";

  taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });
  isValid: boolean = false;

  onSubmit() {
    if (this.taskForm.valid) {
      // Lógica para crear la tarea
      this.isValid = true;
      this.messageTask = [{ severity: 'success', summary: 'Success', detail: 'Task created successfully' }];
      this.taskForm.reset();
    } else {
      this.isValid = false;
      // Los mensajes de error se mostrarán automáticamente por p-messages si está vinculado a los errores del control
    }
  }
  onClose() {
    this.isValid = false;
    this.taskForm.reset();
  }

  onChange(type: "task" | "description") {
    console.log(type);
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

  onCleanForm() {
    this.taskForm.reset();
    this.isValid = false;
    this.messageTask = [];
    this.messageErrorTask = "Field is required";
  }
}
