import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MouseWheelDirective {
    mouseWheelUp: EventEmitter<any>;
    mouseWheelDown: EventEmitter<any>;
    onMouseWheelChrome(event: any): void;
    onMouseWheelFirefox(event: any): void;
    onMouseWheelIE(event: any): void;
    mouseWheelFunc(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MouseWheelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MouseWheelDirective, "[mouseWheel]", never, {}, { "mouseWheelUp": "mouseWheelUp"; "mouseWheelDown": "mouseWheelDown"; }, never>;
}
