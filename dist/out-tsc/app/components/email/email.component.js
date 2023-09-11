import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let EmailComponent = class EmailComponent {
    constructor() {
        //create object and bind each field with the input field
        this.data = {
            to: "",
            subject: "",
            message: ""
        };
    }
    ngOnInit() {
    }
    doSubmitForm() {
        console.log("try to submit form");
        console.log("Data", this.data);
    }
};
EmailComponent = __decorate([
    Component({
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.css']
    })
], EmailComponent);
//# sourceMappingURL=email.component.js.map