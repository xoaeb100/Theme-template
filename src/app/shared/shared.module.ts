import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { SidemenuComponent } from './componets/sidemenu/sidemenu.component';
import { TapToTopComponent } from './componets/tap-to-top/tap-to-top.component';
import { LoaderComponent } from './componets/loader/loader.component';
import { NotificationSidebarComponent } from './componets/notification-sidebar/notification-sidebar.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { HoriHeaderComponent } from './components-horizontal/hori-header/hori-header.component';
import { HoriMenuComponent } from './components-horizontal/hori-menu/hori-menu.component';
import { HoriFullLayoutComponent } from './layouts-horizontal/hori-full-layout/hori-full-layout.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidemenuComponent, TapToTopComponent, LoaderComponent,
                NotificationSidebarComponent, FullLayoutComponent, ContentLayoutComponent, FullscreenDirective,
                HoriHeaderComponent, HoriMenuComponent, HoriFullLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    LoaderComponent, 
    TapToTopComponent,
    FooterComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    HoriFullLayoutComponent
  ],
})
export class SharedModule { }
