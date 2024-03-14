import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/data/api-adapter/restApi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: RestApiService) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  async getListProduct() {
    return this.apiService
      .getRequest(`${environment.apiUrl}/products`, {})
      .subscribe((response) => (this.products = response));
  }

  logger(event: any) {
    console.log(event.target.value);
  }
}
