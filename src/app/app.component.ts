import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskformComponent } from './taskform/taskform.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskformComponent,
    HeaderComponent,
    OptionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

