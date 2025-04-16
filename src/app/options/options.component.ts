import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TaskformComponent } from '../taskform/taskform.component';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute } from '@angular/router';


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
  currentPath = location.pathname;

  handlerViewModal() {
    this.viewModal = true;
    console.log(this.currentPath)
  }
}
