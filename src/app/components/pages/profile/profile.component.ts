import { Component, OnInit } from '@angular/core';
import {
  ButtonsConfig,
  ButtonsStrategy,
  AdvancedLayout,
  GalleryService,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  ButtonEvent,
  ButtonType,
  PlainGalleryConfig,
  PlainGalleryStrategy,

} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/img/photos/7.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    ),
    new Image(
      2,
      { //modal
        img: '../../assets/img/photos/8.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    ),
    new Image(
      3,
      { //modal
        img: '../../assets/img/photos/9.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    ),
    new Image(
      4,
      { //modal
        img: '../../assets/img/photos/10.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    ),
    new Image(
      5,
      { //modal
        img: '../../assets/img/photos/6.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    ),
    new Image(
      6,
      { //modal
        img: '../../assets/img/photos/5.jpg',
        title: 'Gallary Image',
        description:'Photography'
      }
    )
  ]

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  }

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.GalleryImage = [...this.GalleryImage, newImage];
  }


}
