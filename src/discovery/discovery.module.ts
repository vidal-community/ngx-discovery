import {ModuleWithProviders, NgModule} from '@angular/core';
import {DiscoveryDirective} from './discovery.directive';
import {DISCOVERY_SERVICE_CONFIG, DiscoveryService} from './discovery.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [HttpModule],
  declarations: [DiscoveryDirective],
  exports: [DiscoveryDirective]
})
export class DiscoveryModule {
  static forRoot(apiEndpoint): ModuleWithProviders {
    return {
        ngModule: DiscoveryModule,
        providers: [
            DiscoveryService,
            {
                provide: DISCOVERY_SERVICE_CONFIG,
                useValue: { apiEndpoint}
            }
        ]
    };
}
}
