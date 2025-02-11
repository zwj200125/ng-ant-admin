import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttpService} from "@services/base-http.service";
import {User, UserLogin} from "@core/services/types";
import {NzSafeAny} from "ng-zorro-antd/core/types";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: BaseHttpService) {
  }

  public login(params: UserLogin): Observable<User> {
    return this.http.post('/login', params, {needSuccessInfo: false});
  }

  public ceshi(): Observable<NzSafeAny> {
    return this.http.get('/preAuthorize');
  }
}
