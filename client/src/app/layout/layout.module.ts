import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [SidenavComponent, HeaderComponent, ToolbarComponent],
  exports: [SidenavComponent, HeaderComponent, ToolbarComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
})
export class LayoutModule {}
