import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openBasic(basicModal) {
    this.modalService.open(basicModal);
  }

  openSm(smallModal) {
    this.modalService.open(smallModal, { size: 'sm' });
  }

  openLg(largeModal) {
    this.modalService.open(largeModal, { size: 'lg' });
  }
 
  GridOpen(gridModal) {
    this.modalService.open(gridModal, { size: 'lg' });
  }

  SuccessOpen(successModal) {
    this.modalService.open(successModal, { centered: true });
  }

  WarningOpen(warningModal){
    this.modalService.open(warningModal, { centered: true});
  }

  Select2Open(select2Modal) {
    this.modalService.open(select2Modal,{ size: 'sm'});
  }

  openScrollable(scrollModal){
    this.modalService.open(scrollModal,{ scrollable: true});
  }
 
  scrollableContent(scrollContentModal){
    this.modalService.open(scrollContentModal, {scrollable: true});
  }
}
