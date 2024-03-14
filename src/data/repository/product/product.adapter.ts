import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProductListResp, ProductId } from '@core/domain/product.entity';
import { ProductRepository } from '@core/repository/product.repository';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/data/api-adapter/restApi.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapter implements ProductRepository {
  constructor(private http: HttpClient, private apiService: RestApiService) {}

  getListProduct(): Observable<HttpProductListResp[]> {
    return this.apiService.getRequest(`${environment.apiUrl}/products`, null);
  }

  getDetailProduct(id: ProductId): Observable<HttpProductListResp[]> {
    return this.apiService.getRequest(
      `${environment.apiUrl}/products/${id}`,
      null
    );
  }

  submitProduct(
    params: HttpProductListResp
  ): Observable<HttpProductListResp[]> {
    return this.apiService.postRequest(
      `${environment.apiUrl}/products`,
      params
    );
  }
}
