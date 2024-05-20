import { Routes } from "@angular/router";
import { ModelWithAllDataComponent } from "./components/model-with-all-data/model-with-all-data.component";
import { ModelFormComponent } from "./components/model-form/model-form.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { PolishrndComponent } from "./components/polishrnd/polishrnd.component";

export const routes =[
    {path: '', component: MainpageComponent, data : {animationState: 'main-page'}},
    {path: 'model-with-all-data', component: ModelWithAllDataComponent, data : {animationState: 'model-with-all-data'}},
    {path: 'model-form', component: ModelFormComponent, data : {animationState: 'model-form'}},
    {path: 'polishrnd', component: PolishrndComponent, data : {animationState: 'polishrnd'}}
]

