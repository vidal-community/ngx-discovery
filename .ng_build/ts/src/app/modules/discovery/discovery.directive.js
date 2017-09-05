import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DiscoveryService } from './discovery.service';
export class DiscoveryDirective {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} discovery
     */
    constructor(_viewContainer, _template, discovery) {
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
    onClick(e) {
        if (this.service) {
            e.preventDefault();
            e.stopPropagation();
            window.open(this.service.url, this.ngxDiscoveryTarget);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.discovery
            .first(this.ngxDiscovery, this.ngxDiscoveryParams)
            .subscribe(service => {
            this.service = service;
            this.show();
        });
    }
    /**
     * @return {?}
     */
    show() {
        if (!this._hasView) {
            this._hasView = true;
            const /** @type {?} */ v = this._viewContainer.createEmbeddedView(this._template);
            v.rootNodes[0].onclick = (e) => this.onClick(e);
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._hasView) {
            this._hasView = false;
            this._viewContainer.clear();
        }
    }
}
DiscoveryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxDiscovery]'
            },] },
];
/**
 * @nocollapse
 */
DiscoveryDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: DiscoveryService, },
];
DiscoveryDirective.propDecorators = {
    'ngxDiscovery': [{ type: Input, args: ['ngxDiscovery',] },],
    'ngxDiscoveryParams': [{ type: Input, args: ['ngxDiscoveryParams',] },],
    'ngxDiscoveryTarget': [{ type: Input },],
};
function DiscoveryDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DiscoveryDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DiscoveryDirective.ctorParameters;
    /** @type {?} */
    DiscoveryDirective.propDecorators;
    /** @type {?} */
    DiscoveryDirective.prototype.ngxDiscovery;
    /** @type {?} */
    DiscoveryDirective.prototype.ngxDiscoveryParams;
    /** @type {?} */
    DiscoveryDirective.prototype.ngxDiscoveryTarget;
    /** @type {?} */
    DiscoveryDirective.prototype._hasView;
    /** @type {?} */
    DiscoveryDirective.prototype.service;
    /** @type {?} */
    DiscoveryDirective.prototype._viewContainer;
    /** @type {?} */
    DiscoveryDirective.prototype._template;
    /** @type {?} */
    DiscoveryDirective.prototype.discovery;
}
//# sourceMappingURL=discovery.directive.js.map