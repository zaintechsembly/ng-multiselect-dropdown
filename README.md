# Angular Multiselect Dropdown

[![npm version](https://img.shields.io/npm/v/ng-multiselect-dropdown.svg)](https://www.npmjs.com/package/ng-multiselect-dropdown)
[![downloads](https://img.shields.io/npm/dt/ng-multiselect-dropdown.svg)](https://www.npmjs.com/package/ng-multiselect-dropdown)
[![downloads](https://img.shields.io/npm/dm/ng-multiselect-dropdown.svg)](https://www.npmjs.com/package/ng-multiselect-dropdown)

Angular multiselect dropdown component for web applications. Easy to integrate and use. It can be bound to any custom data source.


# 📦 Build & Package

To build and generate a distributable tarball:

```bash
# 1. Build the Angular library
npx ng-packagr -p ng-package.json

# 2. Create an npm package tarball
npm pack --pack-destination ../build

# 3. installation path
 npm install https://raw.githubusercontent.com/zaintechsembly/ng-multiselect-dropdown/0.2.11-upgrade/build/ng-multiselect-dropdown-standalone-0.2.11-upgrade.tgz



![demo](Screenshots/ng-multiselect-dropdown_v0.1.6.gif)

## Getting Started

### Features

- Dropdown with single/multiple selection option
- Bind to any custom data source
- Search item with custom placeholder text
- Limit selection
- Select/Deselect all items

### Installation

```bash
npm install ng-multiselect-dropdown


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AppModule {}


import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings:IDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

<ng-multiselect-dropdown
  [placeholder]="'custom placeholder'"
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onSelect)="onItemSelect($event)"
  (onSelectAll)="onSelectAll($event)"
>
</ng-multiselect-dropdown>
