import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpProductListResp } from '@core/domain/product.entity';
import { ProductUsecase } from '@core/usecase/product/product.usecase';
import { RestApiService } from 'src/data/api-adapter/restApi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: HttpProductListResp[] = [];

  constructor(
    private apiService: RestApiService,
    private titleService: Title,
    public productUsecase: ProductUsecase
  ) {}

  ngOnInit(): void {
    this.getListProduct();
    this.titleService.setTitle('Product');
  }

  async getListProduct() {
    await new Promise<void>((resolve) => {
      this.productUsecase.execute().subscribe((res) => {
        this.products = res;
        resolve();
      });
    });
  }

  logger(event: any) {
    console.log(event.target.value);
  }
}
