import {Injectable} from '@angular/core';
import {NgbConfig} from '../ngb-config';

/**
 * A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all collapses used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgbCollapseConfig {
  private _animation: boolean;
  horizontal = false;

  constructor(private _ngbConfig: NgbConfig) {}

  get animation(): boolean { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
  set animation(animation: boolean) { this._animation = animation; }
}
