import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Task } from '../todaytasks/todaytasks.component';
import { TasksArray } from '../../utils/constants';
import { TaskviewComponent } from '../taskview/taskview.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    InputGroupAddonModule,
    TaskviewComponent,
    FormsModule, ReactiveFormsModule,
    DropdownModule,
    CardModule
  ],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.scss'
})
export class SearchpageComponent {

  formSearch: FormGroup = new FormGroup({
    search: new FormControl<string>("")
  })

  tasks: Task[] = TasksArray
  filterTasks: Task[] = []

  onSearch() {
    const wordSearch = this.formSearch.value.search;
    if (wordSearch !== "") {
      this.filterTasks = this.tasks.filter(newTasks => newTasks.name.toLowerCase().includes(wordSearch.toLowerCase()))
    }
    console.log(this.filterTasks)
  }

}
