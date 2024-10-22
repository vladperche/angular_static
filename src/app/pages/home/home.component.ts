import { Component } from '@angular/core';
import { StaticAttributeComponent } from "../../shared/components/static-attribute/static-attribute.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StaticAttributeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
