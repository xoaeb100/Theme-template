import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit {

  layoutSub: Subscription;
  // isOpen: boolean = true;
  isOpen!:boolean 

  @ViewChild('sidebar', {static: true}) sidebar!: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarRightService: SidebarRightService,
    private modalService: NgbModal
  ) {
    this.layoutSub = sidebarRightService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        // full-layout.component.ts
        let sidebarOpen:any = document.querySelector('.sidebar')
        this.isOpen = sidebarOpen.classList.value.includes('sidebar-open')
        if ( this.isOpen == !this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
        }
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    // this.isOpen = false;
  }
  ngAfterViewInit(){
    const sidebar:any = document.querySelector('.sidebar-left');
    let ps = new PerfectScrollbar(sidebar,{
      wheelPropagation: false,
      suppressScrollX: true
    });
  }

  ChatModal(chatmodel){
    this.modalService.open(chatmodel,{ scrollable: true});
  }
  audioModal(audiomodal){
    this.modalService.open(audiomodal);
  }
  videoModal(videomodal){
    this.modalService.open(videomodal);
  }
}
