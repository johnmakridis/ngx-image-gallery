import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
export class MouseWheelDirective {
    constructor() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    onMouseWheelChrome(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelFirefox(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelIE(event) {
        this.mouseWheelFunc(event);
    }
    mouseWheelFunc(event) {
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
    }
}
MouseWheelDirective.decorators = [
    { type: Directive, args: [{ selector: '[mouseWheel]' },] }
];
MouseWheelDirective.propDecorators = {
    mouseWheelUp: [{ type: Output }],
    mouseWheelDown: [{ type: Output }],
    onMouseWheelChrome: [{ type: HostListener, args: ['mousewheel', ['$event'],] }],
    onMouseWheelFirefox: [{ type: HostListener, args: ['DOMMouseScroll', ['$event'],] }],
    onMouseWheelIE: [{ type: HostListener, args: ['onmousewheel', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvaG4vRG9jdW1lbnRzL1JlcG9zL25neC1pbWFnZS1nYWxsZXJ5L3NyYy9wcm9qZWN0cy9uZ3gtaW1hZ2UtZ2FsbGVyeS9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tb3VzZXdoZWVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlFLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBNkJoRCxDQUFDO0lBM0J5QyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUUyQyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUV5QyxjQUFjLENBQUMsS0FBVTtRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVTtRQUN2QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFpQjtRQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTSxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxTQUFTO1FBQ1QsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIseUJBQXlCO1FBQ3pCLElBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7OzJCQUVwQyxNQUFNOzZCQUNOLE1BQU07aUNBRU4sWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztrQ0FJckMsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUl6QyxZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1ttb3VzZVdoZWVsXScgfSlcbmV4cG9ydCBjbGFzcyBNb3VzZVdoZWVsRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxDaHJvbWUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxGaXJlZm94KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ29ubW91c2V3aGVlbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbElFKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxGdW5jKGV2ZW50OiBhbnkpIHtcbiAgICB2YXIgZXZlbnQgPSB3aW5kb3cuZXZlbnQgfHwgZXZlbnQ7IC8vIG9sZCBJRSBzdXBwb3J0XG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKSk7XG4gICAgaWYoZGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubW91c2VXaGVlbFVwLmVtaXQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZihkZWx0YSA8IDApIHtcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsRG93bi5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgLy8gZm9yIElFXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAvLyBmb3IgQ2hyb21lIGFuZCBGaXJlZm94XG4gICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn0iXX0=