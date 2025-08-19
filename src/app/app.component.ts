import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSectionComponent } from './components/select-section';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SelectSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ngOnInit() {

    }
}
