import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare const DISCOVERY_SERVICE_CONFIG: InjectionToken<DiscoveryServiceConfig>;
export interface DiscoveryServiceConfig {
    apiEndpoint: string;
}
export interface Service {
    name: string;
    url: string;
    description: string;
    shortDescription: string;
    meta: any;
}
export declare class DiscoveryService {
    private http;
    private discoveryServiceConfig;
    envUrl: string;
    environment$: ReplaySubject<string>;
    constructor(http: Http, discoveryServiceConfig: any);
    private filterPath(filter);
    private serviceFilter(service, params);
    private serviceParamsInjection(service, params);
    services(filter: string, params?: any[]): Observable<Service[]>;
    first(filter: string, params: any): Observable<Service>;
    call<T>(filter: string, params: any): Observable<T>;
    callRaw(filter: string, params: any): Observable<Response>;
    environment(refresh?: boolean): Observable<string>;
    private environmentInit();
}
