import { Directive, Inject, Injectable, InjectionToken, Input, NgModule, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { ReplaySubject as ReplaySubject$1 } from 'rxjs/ReplaySubject';
"use strict";
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = require('./Subject');
exports.Subject = Subject_1.Subject;
exports.AnonymousSubject = Subject_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var Observable_1 = require('./Observable');
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
require('./add/observable/bindCallback');
require('./add/observable/bindNodeCallback');
require('./add/observable/combineLatest');
require('./add/observable/concat');
require('./add/observable/defer');
require('./add/observable/empty');
require('./add/observable/forkJoin');
require('./add/observable/from');
require('./add/observable/fromEvent');
require('./add/observable/fromEventPattern');
require('./add/observable/fromPromise');
require('./add/observable/generate');
require('./add/observable/if');
require('./add/observable/interval');
require('./add/observable/merge');
require('./add/observable/race');
require('./add/observable/never');
require('./add/observable/of');
require('./add/observable/onErrorResumeNext');
require('./add/observable/pairs');
require('./add/observable/range');
require('./add/observable/using');
require('./add/observable/throw');
require('./add/observable/timer');
require('./add/observable/zip');
//dom
require('./add/observable/dom/ajax');
require('./add/observable/dom/webSocket');
//operators
require('./add/operator/buffer');
require('./add/operator/bufferCount');
require('./add/operator/bufferTime');
require('./add/operator/bufferToggle');
require('./add/operator/bufferWhen');
require('./add/operator/catch');
require('./add/operator/combineAll');
require('./add/operator/combineLatest');
require('./add/operator/concat');
require('./add/operator/concatAll');
require('./add/operator/concatMap');
require('./add/operator/concatMapTo');
require('./add/operator/count');
require('./add/operator/dematerialize');
require('./add/operator/debounce');
require('./add/operator/debounceTime');
require('./add/operator/defaultIfEmpty');
require('./add/operator/delay');
require('./add/operator/delayWhen');
require('./add/operator/distinct');
require('./add/operator/distinctUntilChanged');
require('./add/operator/distinctUntilKeyChanged');
require('./add/operator/do');
require('./add/operator/exhaust');
require('./add/operator/exhaustMap');
require('./add/operator/expand');
require('./add/operator/elementAt');
require('./add/operator/filter');
require('./add/operator/finally');
require('./add/operator/find');
require('./add/operator/findIndex');
require('./add/operator/first');
require('./add/operator/groupBy');
require('./add/operator/ignoreElements');
require('./add/operator/isEmpty');
require('./add/operator/audit');
require('./add/operator/auditTime');
require('./add/operator/last');
require('./add/operator/let');
require('./add/operator/every');
require('./add/operator/map');
require('./add/operator/mapTo');
require('./add/operator/materialize');
require('./add/operator/max');
require('./add/operator/merge');
require('./add/operator/mergeAll');
require('./add/operator/mergeMap');
require('./add/operator/mergeMapTo');
require('./add/operator/mergeScan');
require('./add/operator/min');
require('./add/operator/multicast');
require('./add/operator/observeOn');
require('./add/operator/onErrorResumeNext');
require('./add/operator/pairwise');
require('./add/operator/partition');
require('./add/operator/pluck');
require('./add/operator/publish');
require('./add/operator/publishBehavior');
require('./add/operator/publishReplay');
require('./add/operator/publishLast');
require('./add/operator/race');
require('./add/operator/reduce');
require('./add/operator/repeat');
require('./add/operator/repeatWhen');
require('./add/operator/retry');
require('./add/operator/retryWhen');
require('./add/operator/sample');
require('./add/operator/sampleTime');
require('./add/operator/scan');
require('./add/operator/sequenceEqual');
require('./add/operator/share');
require('./add/operator/shareReplay');
require('./add/operator/single');
require('./add/operator/skip');
require('./add/operator/skipLast');
require('./add/operator/skipUntil');
require('./add/operator/skipWhile');
require('./add/operator/startWith');
require('./add/operator/subscribeOn');
require('./add/operator/switch');
require('./add/operator/switchMap');
require('./add/operator/switchMapTo');
require('./add/operator/take');
require('./add/operator/takeLast');
require('./add/operator/takeUntil');
require('./add/operator/takeWhile');
require('./add/operator/throttle');
require('./add/operator/throttleTime');
require('./add/operator/timeInterval');
require('./add/operator/timeout');
require('./add/operator/timeoutWith');
require('./add/operator/timestamp');
require('./add/operator/toArray');
require('./add/operator/toPromise');
require('./add/operator/window');
require('./add/operator/windowCount');
require('./add/operator/windowTime');
require('./add/operator/windowToggle');
require('./add/operator/windowWhen');
require('./add/operator/withLatestFrom');
require('./add/operator/zip');
require('./add/operator/zipAll');
/* tslint:disable:no-unused-variable */
var Subscription_1 = require('./Subscription');
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = require('./Subscriber');
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = require('./AsyncSubject');
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = require('./ReplaySubject');
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = require('./BehaviorSubject');
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ConnectableObservable_1 = require('./observable/ConnectableObservable');
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = require('./Notification');
exports.Notification = Notification_1.Notification;
var EmptyError_1 = require('./util/EmptyError');
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = require('./util/ArgumentOutOfRangeError');
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = require('./util/ObjectUnsubscribedError');
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var TimeoutError_1 = require('./util/TimeoutError');
exports.TimeoutError = TimeoutError_1.TimeoutError;
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = require('./operator/timeInterval');
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = require('./operator/timestamp');
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = require('./testing/TestScheduler');
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = require('./scheduler/VirtualTimeScheduler');
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = require('./observable/dom/AjaxObservable');
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var asap_1 = require('./scheduler/asap');
var async_1 = require('./scheduler/async');
var queue_1 = require('./scheduler/queue');
var animationFrame_1 = require('./scheduler/animationFrame');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var iterator_1 = require('./symbol/iterator');
var observable_1 = require('./symbol/observable');
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.rxSubscriber,
    observable: observable_1.observable,
    iterator: iterator_1.iterator
};
exports.Symbol = Symbol;
var DISCOVERY_SERVICE_CONFIG = new InjectionToken('service.discovery.config');
var DiscoveryService = (function () {
    /**
     * @param {?} http
     * @param {?} discoveryServiceConfig
     */
    function DiscoveryService(http$$1, discoveryServiceConfig) {
        this.http = http$$1;
        this.discoveryServiceConfig = discoveryServiceConfig;
        this.environment$ = new ReplaySubject$1(1);
        this.environmentInit();
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    DiscoveryService.prototype.filterPath = function (filter) {
        var /** @type {?} */ url = this.discoveryServiceConfig.apiEndpoint.replace(/\/$/, '');
        return url + '/services/' + filter.replace(/^\//, '');
    };
    /**
     * @param {?} service
     * @param {?} params
     * @return {?}
     */
    DiscoveryService.prototype.serviceFilter = function (service, params) {
        if (Array.isArray(params)) {
            return (service.url.match(/%s/g) || []).length === params.length;
        }
        return !!(Object.keys(params).find(function (key) { return service.url.indexOf('{' + key + '}') !== -1; }));
    };
    /**
     * @param {?} service
     * @param {?} params
     * @return {?}
     */
    DiscoveryService.prototype.serviceParamsInjection = function (service, params) {
        var /** @type {?} */ url;
        if (Array.isArray(params)) {
            url = params.reduce(function (urlAcc, param) { return urlAcc.replace('%s', encodeURIComponent(param)); }, service.url);
        }
        else {
            url = params.reduce(function (urlAcc, param) { return urlAcc.replace(new RegExp('\{\{' + param + '\}\}', 'g'), encodeURIComponent(params[param])); }, service.url);
        }
        return Object.assign({}, service, { url: url });
    };
    /**
     * @param {?} filter
     * @param {?=} params
     * @return {?}
     */
    DiscoveryService.prototype.services = function (filter, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return this.http
            .get(this.filterPath(filter))
            .map(function (r) { return r.json(); })
            .map(function (sesvices) { return Object.keys(sesvices).map(function (k) { return sesvices[k]; })
            .filter(function (service) { return _this.serviceFilter(service, params); })
            .map(function (service) { return _this.serviceParamsInjection(service, params); }); });
    };
    /**
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    DiscoveryService.prototype.first = function (filter, params) {
        return this.services(filter, params)
            .filter(function (sevices) { return sevices.length > 0; })
            .map(function (sevices) { return sevices[0]; });
    };
    /**
     * @template T
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    DiscoveryService.prototype.call = function (filter, params) {
        var _this = this;
        return this.first(filter, params)
            .mergeMap(function (service) { return _this.http.get(service.url); })
            .map(function (r) { return r.json(); });
    };
    /**
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    DiscoveryService.prototype.callRaw = function (filter, params) {
        var _this = this;
        return this.first(filter, params)
            .mergeMap(function (service) { return _this.http.get(service.url); });
    };
    /**
     * @param {?=} refresh
     * @return {?}
     */
    DiscoveryService.prototype.environment = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (refresh) {
            this.http.get(this.envUrl).map(function (r) { return r.text(); }).subscribe(function (env) { return _this.environment$.next(env); });
        }
        return this.environment$;
    };
    /**
     * @return {?}
     */
    DiscoveryService.prototype.environmentInit = function () {
        var _this = this;
        this.envUrl = this.discoveryServiceConfig.apiEndpoint.replace(/\/$/, '') + '/environment';
        this.http.get(this.envUrl).map(function (r) { return r.text(); }).subscribe(function (env) { return _this.environment$.next(env); });
    };
    return DiscoveryService;
}());
DiscoveryService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DiscoveryService.ctorParameters = function () { return [
    { type: Http, },
    { type: undefined, decorators: [{ type: Inject, args: [DISCOVERY_SERVICE_CONFIG,] },] },
]; };
var DiscoveryDirective = (function () {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} discovery
     */
    function DiscoveryDirective(_viewContainer, _template, discovery) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this.discovery = discovery;
        this.ngxDiscoveryTarget = '_blank';
        this._hasView = false;
        this._viewContainer.clear();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DiscoveryDirective.prototype.onClick = function (e) {
        if (this.service) {
            e.preventDefault();
            e.stopPropagation();
            window.open(this.service.url, this.ngxDiscoveryTarget);
        }
    };
    /**
     * @return {?}
     */
    DiscoveryDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.discovery
            .first(this.ngxDiscovery, this.ngxDiscoveryParams)
            .subscribe(function (service) {
            _this.service = service;
            _this.show();
        });
    };
    /**
     * @return {?}
     */
    DiscoveryDirective.prototype.show = function () {
        var _this = this;
        if (!this._hasView) {
            this._hasView = true;
            var /** @type {?} */ v = this._viewContainer.createEmbeddedView(this._template);
            v.rootNodes[0].onclick = function (e) { return _this.onClick(e); };
        }
    };
    /**
     * @return {?}
     */
    DiscoveryDirective.prototype.hide = function () {
        if (this._hasView) {
            this._hasView = false;
            this._viewContainer.clear();
        }
    };
    return DiscoveryDirective;
}());
DiscoveryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxDiscovery]'
            },] },
];
/**
 * @nocollapse
 */
DiscoveryDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: DiscoveryService, },
]; };
DiscoveryDirective.propDecorators = {
    'ngxDiscovery': [{ type: Input, args: ['ngxDiscovery',] },],
    'ngxDiscoveryParams': [{ type: Input, args: ['ngxDiscoveryParams',] },],
    'ngxDiscoveryTarget': [{ type: Input },],
};
var DiscoveryModule = (function () {
    function DiscoveryModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    DiscoveryModule.forRoot = function (apiEndpoint) {
        return {
            ngModule: DiscoveryModule,
            providers: [
                DiscoveryService,
                {
                    provide: DISCOVERY_SERVICE_CONFIG,
                    useValue: { apiEndpoint: apiEndpoint }
                }
            ]
        };
    };
    return DiscoveryModule;
}());
DiscoveryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [DiscoveryDirective],
                exports: [DiscoveryDirective]
            },] },
];
/**
 * @nocollapse
 */
DiscoveryModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { DiscoveryModule, DiscoveryDirective as ɵa, DISCOVERY_SERVICE_CONFIG as ɵb, DiscoveryService as ɵc };
//# sourceMappingURL=vidal-ngx-discovery.es5.js.map
