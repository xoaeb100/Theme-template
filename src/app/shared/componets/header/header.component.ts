import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit , AfterViewInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  layoutSubscription: Subscription;
  public isCollapsed = true;
  public navbarForm:any =  document.querySelector('.navbar-form')
  public mainBody:any =  document.querySelector('body')
  constructor(
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
  ) {
    this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;

      }
    )
  }

  ngOnInit(): void {
    this.navbarForm.addEventListener('click',(event)=>{
      event.preventDefault();
      return;
    })
  }
  toggleSidebarNotification() {
    this.sidebarRightservice.emitSidebarNotifyChange(true);
  }
  toggleSidebarOpen(){
    if ((this.navServices.collapseSidebar = true)) {
      this.mainBody.classList.add('sidenav-toggled');
    }
  }
  toggleSidebarClose(){
    if ((this.navServices.collapseSidebar = true)) {
      this.mainBody.classList.remove('sidenav-toggled');
    }
  }

  search(){
   this.navbarForm.classList.toggle('d-none')
  }
  close(){
    this.navbarForm.classList.add('d-none')
  }

  ngAfterViewInit(){


    const chat:any = document.querySelector('.chat-scroll');
    let ps1:any = new PerfectScrollbar(chat,{
      wheelPropagation: false
    });

    const notification :any = document.querySelector('.Notification-scroll');
    let ps2:any = new PerfectScrollbar(notification,{
      wheelPropagation: false
    });
  }

}
