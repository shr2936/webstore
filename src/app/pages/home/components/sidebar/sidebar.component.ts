import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  @Output() onSelectCategory = new EventEmitter();

  ngOnInit(): void {}

  updateSelectedCategory(category: string) {
    this.onSelectCategory.emit(category);
  }
}
