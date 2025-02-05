import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbdTooltipTarget} from './tooltip-target';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdTooltipTarget],
  exports: [NgbdTooltipTarget],
  bootstrap: [NgbdTooltipTarget]
})
export class NgbdTooltipTargetModule {}
