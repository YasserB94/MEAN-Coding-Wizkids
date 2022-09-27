import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login',
    },
    {
      label: 'About',
      icon: 'help',
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
    },
    {
      label: 'Docs',
      icon: 'notes',
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
