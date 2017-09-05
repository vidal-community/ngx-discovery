import { Injectable, Inject, InjectionToken } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
export const /** @type {?} */ DISCOVERY_SERVICE_CONFIG = new InjectionToken('service.discovery.config');
export class DiscoveryService {
    /**
     * @param {?} http
     * @param {?} discoveryServiceConfig
     */
    constructor(http, discoveryServiceConfig) {
        this.http = http;
        this.discoveryServiceConfig = discoveryServiceConfig;
        this.environment$ = new ReplaySubject(1);
        this.environmentInit();
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    filterPath(filter) {
        const /** @type {?} */ url = this.discoveryServiceConfig.apiEndpoint.replace(/\/$/, '');
        return url + '/services/' + filter.replace(/^\//, '');
    }
    /**
     * @param {?} service
     * @param {?} params
     * @return {?}
     */
    serviceFilter(service, params) {
        if (Array.isArray(params)) {
            return (service.url.match(/%s/g) || []).length === params.length;
        }
        return !!(Object.keys(params).find((key) => service.url.indexOf('{' + key + '}') !== -1));
    }
    /**
     * @param {?} service
     * @param {?} params
     * @return {?}
     */
    serviceParamsInjection(service, params) {
        let /** @type {?} */ url;
        if (Array.isArray(params)) {
            url = params.reduce((urlAcc, param) => urlAcc.replace('%s', encodeURIComponent(param)), service.url);
        }
        else {
            url = params.reduce((urlAcc, param) => urlAcc.replace(new RegExp('\{\{' + param + '\}\}', 'g'), encodeURIComponent(params[param])), service.url);
        }
        return Object.assign({}, service, { url: url });
    }
    /**
     * @param {?} filter
     * @param {?=} params
     * @return {?}
     */
    services(filter, params = []) {
        return this.http
            .get(this.filterPath(filter))
            .map(r => r.json())
            .map(sesvices => Object.keys(sesvices).map(k => sesvices[k])
            .filter((service) => this.serviceFilter(service, params))
            .map(service => this.serviceParamsInjection(service, params)));
    }
    /**
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    first(filter, params) {
        return this.services(filter, params)
            .filter(sevices => sevices.length > 0)
            .map(sevices => sevices[0]);
    }
    /**
     * @template T
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    call(filter, params) {
        return this.first(filter, params)
            .mergeMap(service => this.http.get(service.url))
            .map(r => r.json());
    }
    /**
     * @param {?} filter
     * @param {?} params
     * @return {?}
     */
    callRaw(filter, params) {
        return this.first(filter, params)
            .mergeMap(service => this.http.get(service.url));
    }
    /**
     * @param {?=} refresh
     * @return {?}
     */
    environment(refresh = false) {
        if (refresh) {
            this.http.get(this.envUrl).map(r => r.text()).subscribe(env => this.environment$.next(env));
        }
        return this.environment$;
    }
    /**
     * @return {?}
     */
    environmentInit() {
        this.envUrl = this.discoveryServiceConfig.apiEndpoint.replace(/\/$/, '') + '/environment';
        this.http.get(this.envUrl).map(r => r.text()).subscribe(env => this.environment$.next(env));
    }
}
DiscoveryService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DiscoveryService.ctorParameters = () => [
    { type: Http, },
    { type: undefined, decorators: [{ type: Inject, args: [DISCOVERY_SERVICE_CONFIG,] },] },
];
function DiscoveryService_tsickle_Closure_declarations() {
    /** @type {?} */
    DiscoveryService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DiscoveryService.ctorParameters;
    /** @type {?} */
    DiscoveryService.prototype.envUrl;
    /** @type {?} */
    DiscoveryService.prototype.environment$;
    /** @type {?} */
    DiscoveryService.prototype.http;
    /** @type {?} */
    DiscoveryService.prototype.discoveryServiceConfig;
}
//# sourceMappingURL=discovery.service.js.map