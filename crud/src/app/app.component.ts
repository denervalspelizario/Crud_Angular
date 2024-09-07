import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCrudComponent } from "./component-crud/component-crud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
