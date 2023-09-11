import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';
const routes = [{
        path: "sendemail",
        component: EmailComponent,
        pathMatch: "full"
    },
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    }
];
export let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
//# sourceMappingURL=app-routing.module.js.map