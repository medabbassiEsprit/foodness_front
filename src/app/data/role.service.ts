import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Role from '../model/role';


const API_URL = 'http://localhost:8080/api/role';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {



  constructor(private http: HttpClient) { }

  createRole(name:string): Observable<Role> {
    return this.http.post<Role>(API_URL + '/create', {name}, httpOptions);

  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_URL + '');
  }

  deleteRole(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + '/delete/' + id);
  }




}
