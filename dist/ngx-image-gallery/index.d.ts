import * as i0 from '@angular/core';
import { OnInit, OnChanges, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i4 from '@angular/common';

interface GALLERY_CONF {
    imageBorderRadius?: string;
    imageOffset?: string;
    imagePointer?: boolean;
    showDeleteControl?: boolean;
    showCloseControl?: boolean;
    showExtUrlControl?: boolean;
    showArrows?: boolean;
    showImageTitle?: boolean;
    showThumbnails?: boolean;
    closeOnEsc?: boolean;
    reactToKeyboard?: boolean;
    reactToMouseWheel?: boolean;
    reactToRightClick?: boolean;
    thumbnailSize?: number;
    backdropColor?: string;
    inline?: boolean;
}
interface GALLERY_IMAGE {
    _cached?: boolean;
    url: string;
    thumbnailUrl?: string;
    altText?: string;
    title?: string;
    extUrl?: string;
    extUrlTarget?: string;
}

declare class NgxImageGalleryComponent implements OnInit, OnChanges {
    sanitizer: DomSanitizer;
    private galleryElem;
    private renderer;
    private cdRef;
    opened: boolean;
    conf: GALLERY_CONF;
    images: GALLERY_IMAGE[];
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onImageChange: EventEmitter<any>;
    onImageClicked: EventEmitter<any>;
    onError: EventEmitter<any>;
    thumbnailsElem: ElementRef;
    /***************************************************/
    loading: boolean;
    activeImageIndex: number;
    thumbnailMargin: string;
    thumbnailsScrollerLeftMargin: string;
    get activeImage(): GALLERY_IMAGE;
    get onFirstImage(): boolean;
    get onLastImage(): boolean;
    get thumbnailsRenderParams(): {
        thumbnailsInView: number;
        newThumbnailMargin: number;
        newThumbnailSize: number;
        thumbnailsScrollerLeftMargin: any;
    };
    private setGalleryConf;
    private loadImage;
    private activateImage;
    private fitThumbnails;
    private scrollThumbnails;
    private debouncedPrev;
    private debouncedNext;
    /***************************************************/
    constructor(sanitizer: DomSanitizer, galleryElem: ElementRef, renderer: Renderer2, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onKeyboardInput(event: KeyboardEvent): void;
    onWindowResize(event: Event): void;
    /***************************************************/
    open(index?: number): void;
    close(): void;
    prev(): void;
    next(): void;
    setActiveImage(index: number): void;
    deleteImage(index: number): void;
    mouseWheelUp(): void;
    mouseWheelDown(): void;
    clickOnImage(index: number): void;
    rightClickOnImage(event: Event): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxImageGalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxImageGalleryComponent, "ngx-image-gallery", never, { "conf": { "alias": "conf"; "required": false; }; "images": { "alias": "images"; "required": false; }; }, { "onOpen": "onOpen"; "onClose": "onClose"; "onDelete": "onDelete"; "onImageChange": "onImageChange"; "onImageClicked": "onImageClicked"; "onError": "onError"; }, never, never, false, never>;
}

declare class MouseWheelDirective {
    mouseWheelUp: EventEmitter<any>;
    mouseWheelDown: EventEmitter<any>;
    onMouseWheelChrome(event: any): void;
    onMouseWheelFirefox(event: any): void;
    onMouseWheelIE(event: any): void;
    mouseWheelFunc(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MouseWheelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MouseWheelDirective, "[mouseWheel]", never, {}, { "mouseWheelUp": "mouseWheelUp"; "mouseWheelDown": "mouseWheelDown"; }, never, never, false, never>;
}

declare class ClickOutsideDirective {
    private _elementRef;
    clickOutside: EventEmitter<any>;
    constructor(_elementRef: ElementRef);
    onClick($event: any, targetElement: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[clickOutside]", never, {}, { "clickOutside": "clickOutside"; }, never, never, false, never>;
}

declare class NgxImageGalleryModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxImageGalleryModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxImageGalleryModule, [typeof NgxImageGalleryComponent, typeof MouseWheelDirective, typeof ClickOutsideDirective], [typeof i4.CommonModule], [typeof NgxImageGalleryComponent, typeof MouseWheelDirective, typeof ClickOutsideDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxImageGalleryModule>;
}

export { ClickOutsideDirective, MouseWheelDirective, NgxImageGalleryComponent, NgxImageGalleryModule };
export type { GALLERY_CONF, GALLERY_IMAGE };
