import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RestApiService } from 'src/data/api-adapter/restApi.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApproveSurveyAdapter {
  constructor(private http: HttpClient, private apiService: RestApiService) {}

  getListProduct() {
    return this.apiService.getRequest(`${environment.apiUrl}/products`, null);
  }
}
