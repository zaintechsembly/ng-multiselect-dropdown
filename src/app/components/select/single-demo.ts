import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from '../../../ng-multiselect-dropdown/src';

@Component({
  selector: 'single-demo',
  templateUrl: './single-demo.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectComponent
  ]
})
export class SingleDemoComponent implements OnInit {
  cities: Array<string> = [];
  selectedItem: Array<string> = [];
  dropdownSettings: any = {};
  closeDropdownSelection = false;
  disabled = false;

  ngOnInit() {
    this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];

    this.dropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
    this.selectedItem = ['Mumbai'];
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log('selectedItem', this.selectedItem);
  }

  toggleCloseDropdownSelection() {
    this.closeDropdownSelection = !this.closeDropdownSelection;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { closeDropDownOnSelection: this.closeDropdownSelection });
  }

  handleReset() {
    this.selectedItem = [];
  }
}
