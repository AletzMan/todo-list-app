import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user = {
    name: "Alejandro",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGXowISWQp08w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706248074328?e=1750291200&v=beta&t=XQ7VVQ4RNJcar9nga_TmiTBkFZNKb0sP8MamDYxMqMM"
  }
}
