import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class GenericService{
  router: any;

  constructor (private http: HttpClient){}

  public get<T>(url?:string, endpoint?:string, params?:string, headers?:HttpHeaders): Observable<any>{
    //const enpointUri = params ? `${endpoint}/` : `${endpoint}`;
    const paramRequest = new HttpParams({ fromString:params });

    return this.http.get<T>( `${url}/${endpoint}`, { headers, params:paramRequest }).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result : any) => {
          if(result.code === 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servidor`))
      )),
      catchError((err:HttpErrorResponse) => {
        return this.handleError(err)
      }),
    );
  }
  public post<T>(url?:string, endpoint?:string, model?:any, headers?:HttpHeaders): Observable<any>{
    return this.http.post<T>(`${url}/${endpoint}`, model , {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result : any) => {
          if(result.code === 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servidor`))
      )),
      catchError((err:HttpErrorResponse) => {
        return this.handleError(err)
      }),
    );
  }
  public put<T>(url?:string, endpoint?:string, model?:any, headers?:HttpHeaders): Observable<any>{
    return this.http.put<T>(`${url}/${endpoint}`, model , {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result : any) => {
          if(result.code === 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servidor`))
      )),
      catchError((err:HttpErrorResponse) => {
        return this.handleError(err)
      }),
    );

  }
  public delete<T>(url?:string, endpoint?:string, headers?:HttpHeaders): Observable<any>{
    return this.http.delete<T>(`${url}/${endpoint}`,  {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result : any) => {
          if(result.code === 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servidor`))
      )),
      catchError((err:HttpErrorResponse) => {
        return this.handleError(err)
      }),
    );
  }
  public patch<T>(url?:string, endpoint?:string, model?:any, headers?:HttpHeaders): Observable<any>{
    return this.http.patch<T>(`${url}/${endpoint}`, model , {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result : any) => {
          if(result.code === 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servidor`))
      )),
      catchError((err:HttpErrorResponse) => {
        return this.handleError(err)
      }),
    );
  }

  handleError(error: HttpErrorResponse):any{
    if(error.error != null && error.error.message === 'No Auth'){
      this.router.navigate(['/']);
      localStorage.clear();
    }
    let messageError = error.error != null ? `El sericio presenta el siguiente error: ${error.message}`:'';
    console.log(messageError);
    return throwError(error)
  }
}
