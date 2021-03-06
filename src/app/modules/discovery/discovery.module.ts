import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryDirective } from './discovery.directive';
import { DiscoveryService, DISCOVERY_SERVICE_CONFIG } from './discovery.service';
import { HttpModule } from '@angular/http';

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
