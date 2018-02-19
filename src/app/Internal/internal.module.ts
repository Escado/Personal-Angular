import { NgModule } from '@angular/core';

import { InternalRoutingModule } from './internal-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        InternalRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [
    ],
    providers: [],
})
export class InternalModule { }
