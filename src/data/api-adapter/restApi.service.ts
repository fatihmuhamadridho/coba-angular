import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  postRequest(apiUrl: any, body: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.post<any>(apiUrl, body, { headers }).pipe(
      tap((res) => res.data),
      catchError(this.handleError)
    );
  }

  getRequest(apiUrl: any, params: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.get<any>(apiUrl, { params }).pipe(
      tap((res) => res.data),
      catchError(this.handleError)
    );
  }

  putRequest(apiUrl: any, body: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.put<any>(apiUrl, body).pipe(
      tap((res) => res.data),
      catchError(this.handleError)
    );
  }

  deleteRequest(apiUrl: any, params: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.delete<any>(apiUrl + params).pipe(
      tap((res) => res),
      catchError(this.handleError)
    );
  }

  postUpload(apiUrl: any, body: any) {
    // var boundary = Math.random().toString().substring(2);
    // const headers = new HttpHeaders({
    //   'Content-type': 'multipart/form-data;boundary=------------------------' + boundary,
    // });
    // const headers = new HttpHeaders({
    //   'Content-type': 'multipart/form-data;boundary=test',
    // });

    return this.http.post<any>(apiUrl, body).pipe(
      tap((res) => res.data),
      catchError(this.handleError)
    );
  }

  postDownloadZip(apiUrl: any, body: any) {
    return this.http
      .post(apiUrl, body, {
        responseType: 'json',
        reportProgress: true,
        observe: 'events',
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap((res) => res),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage = error;
    return throwError(errorMessage);
  }

  getRequestNoParam(apiUrl: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.get<any>(apiUrl).pipe(
      tap((res) => res.data),
      catchError(this.handleError)
    );
  }
}
