import { __decorate } from "tslib";
import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
var MouseWheelDirective = /** @class */ (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    __decorate([
        Output()
    ], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
    __decorate([
        Output()
    ], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
    __decorate([
        HostListener('mousewheel', ['$event'])
    ], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
    __decorate([
        HostListener('DOMMouseScroll', ['$event'])
    ], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
    __decorate([
        HostListener('onmousewheel', ['$event'])
    ], MouseWheelDirective.prototype, "onMouseWheelIE", null);
    MouseWheelDirective = __decorate([
        Directive({ selector: '[mouseWheel]' })
    ], MouseWheelDirective);
    return MouseWheelDirective;
}());
export { MouseWheelDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aam9obm1ha3JpZGlzL25neC1pbWFnZS1nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbW91c2V3aGVlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHOUU7SUFBQTtRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QmhELENBQUM7SUEzQnlDLGdEQUFrQixHQUFsQixVQUFtQixLQUFVO1FBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUUyQyxpREFBbUIsR0FBbkIsVUFBb0IsS0FBVTtRQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFeUMsNENBQWMsR0FBZCxVQUFlLEtBQVU7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLEtBQVU7UUFDdkIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxpQkFBaUI7UUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU0sSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsU0FBUztRQUNULEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHlCQUF5QjtRQUN6QixJQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQTdCUztRQUFULE1BQU0sRUFBRTs2REFBbUM7SUFDbEM7UUFBVCxNQUFNLEVBQUU7K0RBQXFDO0lBRU47UUFBdkMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lFQUV0QztJQUUyQztRQUEzQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztrRUFFMUM7SUFFeUM7UUFBekMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZEQUV4QztJQWRVLG1CQUFtQjtRQUQvQixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUM7T0FDM0IsbUJBQW1CLENBK0IvQjtJQUFELDBCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EvQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1ttb3VzZVdoZWVsXScgfSlcbmV4cG9ydCBjbGFzcyBNb3VzZVdoZWVsRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxDaHJvbWUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxGaXJlZm94KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ29ubW91c2V3aGVlbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbElFKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxGdW5jKGV2ZW50OiBhbnkpIHtcbiAgICB2YXIgZXZlbnQgPSB3aW5kb3cuZXZlbnQgfHwgZXZlbnQ7IC8vIG9sZCBJRSBzdXBwb3J0XG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKSk7XG4gICAgaWYoZGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubW91c2VXaGVlbFVwLmVtaXQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZihkZWx0YSA8IDApIHtcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsRG93bi5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgLy8gZm9yIElFXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAvLyBmb3IgQ2hyb21lIGFuZCBGaXJlZm94XG4gICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn0iXX0=