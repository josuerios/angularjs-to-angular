import * as ng from 'angular';
import { ajsRootComponent } from './ajs-root.component';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '../app.component';

declare var angular: ng.IAngularStatic;

export const ajsAppModule = angular.module('ajsApp', []);

// New application root
ajsAppModule.component('ajsRoot', ajsRootComponent);

// Downgrade app-root component so we can use it in AngularJS
ajsAppModule.directive('appRoot', downgradeComponent({ component: AppComponent }));
