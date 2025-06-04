import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective {
    private _elementRef;
    clickOutside: EventEmitter<any>;
    constructor(_elementRef: ElementRef);
    onClick($event: any, targetElement: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[clickOutside]", never, {}, { "clickOutside": "clickOutside"; }, never>;
}
