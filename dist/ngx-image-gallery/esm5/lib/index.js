import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageGalleryComponent } from './components/ngx-image-gallery/ngx-image-gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
var NgxImageGalleryModule = /** @class */ (function () {
    function NgxImageGalleryModule() {
    }
    NgxImageGalleryModule = __decorate([
        NgModule({
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
        })
    ], NgxImageGalleryModule);
    return NgxImageGalleryModule;
}());
export { NgxImageGalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aam9obm1ha3JpZGlzL25neC1pbWFnZS1nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUNwRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUV0RSxjQUFjLDREQUE0RCxDQUFDO0FBQzNFLGNBQWMsc0NBQXNDLENBQUM7QUFDckQsY0FBYyxtQ0FBbUMsQ0FBQztBQWtCbEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxxQkFBcUI7UUFmakMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLFlBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix3QkFBd0I7Z0JBQ3hCLG1CQUFtQjtnQkFDbkIscUJBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdCQUF3QjtnQkFDeEIsbUJBQW1CO2dCQUNuQixxQkFBcUI7YUFDeEI7U0FDSixDQUFDO09BQ1cscUJBQXFCLENBQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge05neEltYWdlR2FsbGVyeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1pbWFnZS1nYWxsZXJ5L25neC1pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0NsaWNrT3V0c2lkZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TW91c2VXaGVlbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL25neC1pbWFnZS1nYWxsZXJ5L25neC1pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWltYWdlLWdhbGxlcnkuY29uZic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hJbWFnZUdhbGxlcnlDb21wb25lbnQsXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hJbWFnZUdhbGxlcnlDb21wb25lbnQsXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4SW1hZ2VHYWxsZXJ5TW9kdWxlIHtcbn1cbiJdfQ==