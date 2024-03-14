import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/data/api-adapter/restApi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  detailProduct: any = {};
  id = '';

  constructor(
    private router: ActivatedRoute,
    private apiService: RestApiService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.titleService.setTitle(`Detail Product : ${this.id}`);
    this.getDetailProduct();
  }

  getDetailProduct() {
    return this.apiService
      .getRequest(`${environment.apiUrl}/products/${this.id}`, {})
      .subscribe((response) => (this.detailProduct = response));
  }
}
