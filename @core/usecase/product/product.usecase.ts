import { Injectable } from '@angular/core';
import { UseCaseWithoutDto } from '@core/base/usecase';
import { HttpProductListResp } from '@core/domain/product.entity';
import { ProductRepository } from '@core/repository/product.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductUsecase
  implements UseCaseWithoutDto<HttpProductListResp[]>
{
  constructor(private repository: ProductRepository) {}

  execute(): Observable<HttpProductListResp[]> {
    return this.repository.getListProduct();
  }
}
