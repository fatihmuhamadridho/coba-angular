import { HttpProductListResp } from '@core/domain/product.entity';
import { Observable } from 'rxjs';

export abstract class ProductRepository {
  abstract getListProduct(): Observable<HttpProductListResp[]>;
}
