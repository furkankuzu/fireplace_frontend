import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuIsOpen = false;
  public isActive = false;
  public innerWidth = window.innerWidth;
  scrWidth: any;
  constructor() {
    this.getScreenSize();
  }
  ngOnInit(): void {}

  toggleSidebar() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth > 1024) {
      this.menuIsOpen = false;
    }
  }
}
