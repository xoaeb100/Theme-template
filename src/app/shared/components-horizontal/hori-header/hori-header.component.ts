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
    mainBody:any =  document.querySelector('body');

  ngOnInit(): void {
    
  }

  toggleSidebarNotification() {
    this.SidebarRightService.emitSidebarNotifyChange(true);
  }

  sidebar: boolean = this.mainBody.classList.value.includes('active');
  toggleSidebar(){
    
    if (this.sidebar == !this.sidebar) {
      this.mainBody.classList.remove('active');
      this.mainBody.classList.remove('menu-open');
    }
    else {
      this.mainBody.classList.add('menu-open');
      this.mainBody.classList.add('active');
    }
  }
  search(){
    let navbarForm:any =  document.querySelector('.navbar-form ');
    navbarForm.classList.toggle('d-none')
  }
  close(){
    let navbarForm:any =  document.querySelector('.navbar-form ');
    navbarForm.classList.add('d-none')
  }

  ngAfterViewInit(){
    // const sidemenu = document.querySelector('.app-sidebar');
    // let ps = new PerfectScrollbar(sidemenu,{
    //   wheelPropagation: false
    // });

    const chat:any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat,{
      wheelPropagation: false,
      suppressScrollX:true
    });

    const notification:any  = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification,{
      wheelPropagation: false,
      suppressScrollX:true
    });
  }
}
