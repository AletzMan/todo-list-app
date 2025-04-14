import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TaskformComponent } from '../taskform/taskform.component';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    ButtonModule,
    TaskformComponent,
    DialogModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  viewModal = false
  handlerViewModal() {
    this.viewModal = true;
  }
}
