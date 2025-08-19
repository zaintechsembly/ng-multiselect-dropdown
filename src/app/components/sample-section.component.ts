import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sample-section',
  templateUrl: './sample-section.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class SampleSectionComponent {
  @Input() public desc: any;
}
