import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Task } from '../todaytasks/todaytasks.component';
import { CategoriesArray, StatusArray, TasksArray } from '../../utils/constants';
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
export class SearchpageComponent implements OnInit {

  categories = CategoriesArray;
  status = StatusArray;


  formSearch: FormGroup = new FormGroup({
    search: new FormControl<string>(""),
    currentCategory: new FormControl<string | undefined>(undefined),
    currentStatus: new FormControl<string | undefined>(undefined)
  })

  tasks: Task[] = TasksArray
  filterTasks: Task[] = []

  ngOnInit() {
    this.filterTasks = this.tasks;
  }

  onSearch() {
    this.updateFilters();
  }

  onChangeCategory() {
    this.updateFilters();
  }

  onChangeStatus() {
    this.updateFilters();
  }

  private updateFilters() {
    const wordSearch = this.formSearch.value.search;
    const selectedStatus = this.formSearch.value.currentStatus?.key; // Usar encadenamiento opcional
    const selectedCategory = this.formSearch.value.currentCategory?.key; // Usar encadenamiento opcional

    // Empezar con la lista completa de tareas
    this.filterTasks = [...this.tasks];

    // Aplicar filtro por búsqueda de palabra clave
    if (wordSearch !== "") {
      this.filterTasks = this.filterTasks.filter(task =>
        task.name.toLowerCase().includes(wordSearch.toLowerCase())
      );
    }

    // Aplicar filtro por estado
    if (selectedStatus) {
      if (selectedStatus === "all") {
        this.filterTasks = this.filterTasks
      } else {

        this.filterTasks = this.filterTasks.filter(task =>
          task.status.toLowerCase() === selectedStatus.toLowerCase()
        );
      }
    }

    // Aplicar filtro por categoría
    if (selectedCategory) {
      if (selectedCategory === "all") {
        this.filterTasks = this.filterTasks
      } else {
        this.filterTasks = this.filterTasks.filter(task =>
          task.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    }
  }

}
