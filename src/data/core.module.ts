import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { RestApiService } from './api-adapter/restApi.service';
import { ProductRepository } from '@core/repository/product.repository';
import { ProductAdapter } from './repository/product/product.adapter';
import { CommonModule } from '@angular/common';

const DATA_SERVICE: Provider[] = [
  RestApiService,
  { provide: ProductRepository, useClass: ProductAdapter },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DATA_SERVICE],
    };
  }
}
