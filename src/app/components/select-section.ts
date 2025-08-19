import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSectionComponent } from './sample-section.component';
import { MultipleDemoComponent } from './select/multiple-demo';
import { SingleDemoComponent } from './select/single-demo';
// import { TabsModule } from 'ngx-bootstrap/tabs';


const tabDesc: any = {
  single: {
    heading: 'Single'
  }
  ,
  multiple1: {
    heading: 'Multiple-Example1'
  }
};

@Component({
  selector: 'select-section',
  standalone: true,
  imports: [
    CommonModule,
    SampleSectionComponent,
    SingleDemoComponent,
    MultipleDemoComponent,
    // TabsModule
  ],
  template: `
<section>
  <div class="row">
    <div class="col-md-12">
      <div class="nav nav-tabs mb-3">
        <button 
          class="nav-link" 
          [class.active]="activeTab === 'multiple'"
          (click)="activeTab = 'multiple'"
          type="button">
          Multiple
        </button>
        <button 
          class="nav-link" 
          [class.active]="activeTab === 'single'"
          (click)="activeTab = 'single'"
          type="button">
          Single
        </button>
      </div>
      
      <div class="tab-content">
        <div *ngIf="activeTab === 'multiple'" class="tab-pane active">
          <sample-section [desc]="tabDesc.multiple1"><multiple-demo></multiple-demo></sample-section>
        </div>
        <div *ngIf="activeTab === 'single'" class="tab-pane active">
          <sample-section [desc]="tabDesc.single"><single-demo></single-demo></sample-section>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .nav-link {
      border: 1px solid #dee2e6;
      border-bottom: none;
      background: #f8f9fa;
      color: #495057;
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-right: 2px;
    }
    .nav-link.active {
      background: white;
      color: #495057;
      border-color: #dee2e6 #dee2e6 white;
    }
    .tab-content {
      border: 1px solid #dee2e6;
      padding: 1rem;
      background: white;
    }
  `]
})
export class SelectSectionComponent {
  public currentHeading = 'Single';
  public activeTab = 'multiple';
  public tabDesc: any = tabDesc;
}
