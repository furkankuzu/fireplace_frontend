import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [PublicLayoutComponent, PrivateLayoutComponent],
  declarations: [
    PublicLayoutComponent,
    PrivateLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
})
export class LayoutModule {}
