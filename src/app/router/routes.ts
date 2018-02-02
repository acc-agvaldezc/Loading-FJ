import { Route } from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";

export const baseRoutes: Route[] = [
    { path: '', component: WelcomeComponent}
];