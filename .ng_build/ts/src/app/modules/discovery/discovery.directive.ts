import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, HostListener } from '@angular/core';
import { DiscoveryService, Service } from './discovery.service';

@Directive({
    selector: '[ngxDiscovery]'
})
export class DiscoveryDirective implements OnInit {
    @Input('ngxDiscovery') ngxDiscovery: string;
    @Input('ngxDiscoveryParams') ngxDiscoveryParams: any;
    @Input() ngxDiscoveryTarget = '_blank';

    private _hasView = false;
    private service: Service;

    constructor(private _viewContainer: ViewContainerRef, private _template: TemplateRef<Object>, private discovery: DiscoveryService) {
        this._viewContainer.clear();
    }

    onClick(e) {
        if (this.service) {
            e.preventDefault();
            e.stopPropagation();
            window.open(this.service.url, this.ngxDiscoveryTarget);
        }
    }

    ngOnInit() {
        this.discovery
            .first(this.ngxDiscovery, this.ngxDiscoveryParams)
            .subscribe(service => {
                this.service = service;
                this.show();
            });
    }


    private show() {
        if (!this._hasView) {
            this._hasView = true;
            const v = this._viewContainer.createEmbeddedView(this._template);
            v.rootNodes[0].onclick = (e) => this.onClick(e);
        }
    }

    private hide() {
        if (this._hasView) {
            this._hasView = false;
            this._viewContainer.clear();
        }
    }


}
