import { Component, OnInit } from '@angular/core';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  toggleClass = "fe fe-maximize";
  constructor(
    private SidebarRightService: SidebarRightService,
    private horizontalNavService: HorizontalNavService,
  ) { }

  ngOnInit(): void {
    console.log()
  }

  toggleSidebarNotification() {
    this.SidebarRightService.emitSidebarNotifyChange(true);
  }
  Body:any =document.querySelector('body')
  sidebar: boolean = this.Body.classList.value.includes('active');
  toggleSidebar(){
    
    // if(this.sidebar != this.sidebar){} for better effictive and clean code of code
    if (this.sidebar == !this.sidebar) {
      this.Body.classList.remove('active');
      this.Body.classList.remove('menu-open');
    }
    else {
      this.Body.classList.add('menu-open');
      this.Body.classList.add('active');
    }
  }
  search(){
    let navbarForm:any = document.querySelector('.navbar-form ')
    navbarForm.classList.toggle('d-none')
  }
  close(){
    let navbarForm:any = document.querySelector('.navbar-form ')
    navbarForm.classList.add('d-none')
  }

  ngAfterViewInit(){
    // const sidemenu = document.querySelector('.app-sidebar');
    // let ps = new PerfectScrollbar(sidemenu,{
    //   wheelPropagation: false
    // });

    const chat:any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat,{
      wheelPropagation: false
    });

    const notification:any  = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification,{
      wheelPropagation: false
    });
  }
}
