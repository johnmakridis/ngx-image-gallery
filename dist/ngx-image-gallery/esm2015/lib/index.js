import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageGalleryComponent } from './components/ngx-image-gallery/ngx-image-gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
export * from './ngx-image-gallery.conf';
export class NgxImageGalleryModule {
}
NgxImageGalleryModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvaG4vRG9jdW1lbnRzL1JlcG9zL25neC1pbWFnZS1nYWxsZXJ5L3NyYy9wcm9qZWN0cy9uZ3gtaW1hZ2UtZ2FsbGVyeS9zcmMvIiwic291cmNlcyI6WyJsaWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFDcEcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsY0FBYyw0REFBNEQsQ0FBQztBQUMzRSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMsbUNBQW1DLENBQUM7QUFDbEQsY0FBYywwQkFBMEIsQ0FBQztBQWlCekMsTUFBTSxPQUFPLHFCQUFxQjs7O1lBZmpDLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1Ysd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixxQkFBcUI7aUJBQ3hCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge05neEltYWdlR2FsbGVyeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1pbWFnZS1nYWxsZXJ5L25neC1pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0NsaWNrT3V0c2lkZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TW91c2VXaGVlbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL25neC1pbWFnZS1nYWxsZXJ5L25neC1pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWltYWdlLWdhbGxlcnkuY29uZic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hJbWFnZUdhbGxlcnlDb21wb25lbnQsXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hJbWFnZUdhbGxlcnlDb21wb25lbnQsXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4SW1hZ2VHYWxsZXJ5TW9kdWxlIHtcbn1cbiJdfQ==