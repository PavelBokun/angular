import { Routes } from '@angular/router';
import { Test1Component } from './firstcomponent/test1.component';
import { AnotherComponentComponent } from './secondcomponent/another-component.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';
import { GtComponent } from './secondcomponent/gt/gt.component';
import { SixthcomponentComponent } from './sixthcomponent/sixthcomponent.component';

export const routes: Routes = [
    { path: '',component:Test1Component, pathMatch: 'full'},
        { path: 'second', component:AnotherComponentComponent  },
        {path: 'third',component: ThirdcomponentComponent},
        { path: 'second/gt', component:GtComponent  },
        {path:'sixe', component:SixthcomponentComponent}
        
];
