import { Injectable } from '@angular/core';

import { Cookie } from 'ng2-cookies/ng2-cookies';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';


  constructor(public http:HttpClient) { }

  public getUserInfoFromLocalstorage=() =>
  {
    return JSON.parse(localStorage.getItem('userInfo'));
  }
   public setUserInfoInLocalStorage= (data) =>
   {
     localStorage.setItem('userInfo',JSON.stringify(data));
   }


  public signupFunction(data): Observable<any>{
    const params= new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    .set('apiKey',data.apiKey);
    return this.http.post(`${this.url}/api/v1/users/signup`,params);
  }


  public signinFunction(data):Observable<any>{
    const params=new HttpParams()
    .set('email',data.email)
    .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`,params);
  }
  private  handleError(err:HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof Error){
      errorMessage='An error occurered: ${err.error.message}';
      
    }
  }

  public logout(): Observable<any> {

    const params = new HttpParams()
    .set('authToken', Cookie.get('authtoken'))
    
    return this.http.post(`${this.url}/api/v1/users/logout`, params);
    
    }



}
