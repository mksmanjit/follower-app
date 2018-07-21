import { Component } from '@angular/core';
export class HomeComponent {
    constructor() {
        this.title = "Angular App";
    }
    ngOnInit() {
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [];
//# sourceMappingURL=home.component.js.map