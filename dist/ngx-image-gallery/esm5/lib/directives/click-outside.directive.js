import { __decorate } from "tslib";
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.onClick = function ($event, targetElement) {
        var isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            this.clickOutside.emit($event);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aam9obm1ha3JpZGlzL25neC1pbWFnZS1nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFGO0lBR0UsK0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRmpDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUd4Qyx1Q0FBTyxHQUFkLFVBQWUsTUFBTSxFQUFFLGFBQWE7UUFDbEMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkFSZ0MsVUFBVTs7SUFGakM7UUFBVCxNQUFNLEVBQUU7K0RBQXNEO0lBSy9EO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO3dEQU0zRDtJQVhVLHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7T0FDVyxxQkFBcUIsQ0FZakM7SUFBRCw0QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIGNsaWNrT3V0c2lkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50JywgJyRldmVudC50YXJnZXQnXSlcbiAgcHVibGljIG9uQ2xpY2soJGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgaXNDbGlja2VkSW5zaWRlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xuICAgIGlmICghaXNDbGlja2VkSW5zaWRlKSB7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KCRldmVudCk7XG4gICAgfVxuICB9XG59Il19