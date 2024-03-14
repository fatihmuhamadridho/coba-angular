import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/data/api-adapter/restApi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  constructor(private apiService: RestApiService) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  async getListProduct() {
    return this.apiService
      .getRequest(`${environment.apiUrl}/products`, {})
      .subscribe((response) => console.log({ response }));
  }

  logger(event: any) {
    console.log(event.target.value);
  }
}
