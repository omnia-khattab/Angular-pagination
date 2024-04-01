import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users_list_api='https://reqres.in/api/users?';

  private user_api ='https://reqres.in/api/users/';

  constructor(private _HttpClient:HttpClient) { }

  getUsersList(page:number):Observable<any>{
    const headers = new HttpHeaders().set('Cache-Control', 'max-age=86400');
    const params={page:page.toString()}
    return this._HttpClient.get<any>(this.users_list_api, {
      params: params,
      headers: headers
    });  }

  getUserByID(id:string):Observable<any>{
    const params={id}
    return this._HttpClient.get(this.user_api,{params});
  }

}
