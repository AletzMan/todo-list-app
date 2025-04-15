import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    InputGroupAddonModule
  ],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.scss'
})
export class SearchpageComponent {

}
