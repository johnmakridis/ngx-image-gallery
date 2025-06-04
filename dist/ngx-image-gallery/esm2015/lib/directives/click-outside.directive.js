import { __decorate } from "tslib";
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    onClick($event, targetElement) {
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            this.clickOutside.emit($event);
        }
    }
};
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Output()
], ClickOutsideDirective.prototype, "clickOutside", void 0);
__decorate([
    HostListener('document:click', ['$event', '$event.target'])
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = __decorate([
    Directive({
        selector: '[clickOutside]'
    })
], ClickOutsideDirective);
export { ClickOutsideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aam9obm1ha3JpZGlzL25neC1pbWFnZS1nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFGLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBR2hDLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRmpDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUd4QyxPQUFPLENBQUMsTUFBTSxFQUFFLGFBQWE7UUFDbEMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFUa0MsVUFBVTs7QUFGakM7SUFBVCxNQUFNLEVBQUU7MkRBQXNEO0FBSy9EO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO29EQU0zRDtBQVhVLHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7R0FDVyxxQkFBcUIsQ0FZakM7U0FaWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NsaWNrT3V0c2lkZV0nXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBjbGlja091dHNpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXG4gIHB1YmxpYyBvbkNsaWNrKCRldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIGNvbnN0IGlzQ2xpY2tlZEluc2lkZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcbiAgICBpZiAoIWlzQ2xpY2tlZEluc2lkZSkge1xuICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdCgkZXZlbnQpO1xuICAgIH1cbiAgfVxufSJdfQ==