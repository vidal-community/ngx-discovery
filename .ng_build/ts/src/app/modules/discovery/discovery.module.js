import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryDirective } from './discovery.directive';
import { DiscoveryService, DISCOVERY_SERVICE_CONFIG } from './discovery.service';
export class DiscoveryModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        return {
            ngModule: DiscoveryModule,
            providers: [
                DiscoveryService,
                {
                    provide: DISCOVERY_SERVICE_CONFIG,
                    useValue: { apiEndpoint }
                }
            ]
        };
    }
}
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
DiscoveryModule.ctorParameters = () => [];
function DiscoveryModule_tsickle_Closure_declarations() {
    /** @type {?} */
    DiscoveryModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DiscoveryModule.ctorParameters;
}
//# sourceMappingURL=discovery.module.js.map