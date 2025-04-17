import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
interface Profile {
  name: string
  lastName: string
  email: string
  photo: string
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CardModule, InputTextModule, ReactiveFormsModule, MessageModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  user: Profile = {
    name: 'Alejandro',
    lastName: 'Garcia Alonso',
    email: 'alejandro@app.com',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGXowISWQp08w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706248074328?e=1750291200&v=beta&t=XQ7VVQ4RNJcar9nga_TmiTBkFZNKb0sP8MamDYxMqMM'
  }

  @ViewChild('editNameInput') editNameInput: ElementRef | null = null;
  editName = false;
  editLastName = false;
  form: FormGroup = new FormGroup({
    name: new FormControl<string>(this.user.name, Validators.required),
    lastName: new FormControl<string>(this.user.lastName, Validators.required),
  })

  onEditName(state: boolean) {
    this.editName = state;
    this.form.controls['name'].setValue(this.user.name);
  }

  onEditLastName(state: boolean) {
    this.editLastName = state;
    this.form.controls['lastName'].setValue(this.user.lastName);
  }


  onSaveData(type: 'name' | 'lastName') {
    if (this.form.valid) {
      this.user[type] = this.form.value[type];
      if (type === 'name') {
        this.editName = false;
      } else {
        this.editLastName = false;

      }
    }
  }
}
