import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  endpoint = 'http://localhost:8080/api/';

  public getAllStatusServicos(): Observable<any> {
    return this.http.get(this.endpoint + 'dashboard/get-status-servicos');
  }

  public getAllStatusCounted(): Observable<any> {
    return this.http.get(this.endpoint + 'dashboard/get-all-status-counted');
  }

  public getAllStados(): Observable<any> {
    return this.http.get(this.endpoint + 'status-servicos/get-all-estados');
  }


  public getIndisponibilidade(): Observable<any> {
    return this.http.get(this.endpoint + 'dashboard/get-status-indisponibilidade-maior');
  }

}
