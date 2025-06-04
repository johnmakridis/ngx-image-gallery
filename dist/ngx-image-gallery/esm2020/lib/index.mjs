import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageGalleryComponent } from './components/ngx-image-gallery/ngx-image-gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
import * as i0 from "@angular/core";
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
export * from './ngx-image-gallery.conf';
export class NgxImageGalleryModule {
}
NgxImageGalleryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxImageGalleryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxImageGalleryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxImageGalleryModule, declarations: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective], imports: [CommonModule], exports: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective] });
NgxImageGalleryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxImageGalleryModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxImageGalleryModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NgxImageGalleryComponent,
                        MouseWheelDirective,
                        ClickOutsideDirective
                    ],
                    exports: [
                        NgxImageGalleryComponent,
                        MouseWheelDirective,
                        ClickOutsideDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvamVjdHMvbmd4LWltYWdlLWdhbGxlcnkvc3JjL2xpYi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUNwRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFdEUsY0FBYyw0REFBNEQsQ0FBQztBQUMzRSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMsbUNBQW1DLENBQUM7QUFDbEQsY0FBYywwQkFBMEIsQ0FBQztBQWlCekMsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVYxQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHFCQUFxQixhQUxyQixZQUFZLGFBUVosd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixxQkFBcUI7bUhBR2hCLHFCQUFxQixZQWRyQjtZQUNMLFlBQVk7U0FDZjsyRkFZUSxxQkFBcUI7a0JBZmpDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3FCQUN4QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7Tmd4SW1hZ2VHYWxsZXJ5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWltYWdlLWdhbGxlcnkvbmd4LWltYWdlLWdhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q2xpY2tPdXRzaWRlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb3VzZVdoZWVsRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbW91c2V3aGVlbC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWltYWdlLWdhbGxlcnkvbmd4LWltYWdlLWdhbGxlcnkuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvbW91c2V3aGVlbC5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZ3gtaW1hZ2UtZ2FsbGVyeS5jb25mJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neEltYWdlR2FsbGVyeUNvbXBvbmVudCxcbiAgICAgICAgTW91c2VXaGVlbERpcmVjdGl2ZSxcbiAgICAgICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5neEltYWdlR2FsbGVyeUNvbXBvbmVudCxcbiAgICAgICAgTW91c2VXaGVlbERpcmVjdGl2ZSxcbiAgICAgICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbWFnZUdhbGxlcnlNb2R1bGUge1xufVxuIl19