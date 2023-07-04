import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../model/user';

const API_URL = 'http://127.0.0.1:8080/api/test/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAssociationBoard(): Observable<any> {
    return this.http.get(API_URL + 'association', { responseType: 'text' });
  }
  getRestaurantBoard(): Observable<any> {
    return this.http.get(API_URL + 'restaurant', { responseType: 'text' });
  }


  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  createUser(userData: any): Observable<any> {

    return this.http.post(API_URL + 'create', {userData} , httpOptions);
  }

  deleteUser(userId: string) : Observable<any>{

    return this.http.delete(API_URL + 'delete/'+ userId);
  }

  updateUser(userId: string, userData: any) : Observable<any>{

    return this.http.put(`http://localhost:8080/api/test/update/${userId}` ,userData);
  }

  getUserById(userId: string): Observable<User[]> {

        return this.http.get<User[]>(API_URL + userId, httpOptions);
      }

  getAllUsers() : Observable<User[]> {

          return this.http.get<User[]>(API_URL + '');

     }
  updateUserProfile(userData: any): Observable<any> {

   return this.http.put(API_URL + 'profile', {userData} , httpOptions);
   }
  updateUserStatus(userId: string, userData: any): Observable<any> {

    return this.http.put(API_URL + 'status/${userId}', {userData} , httpOptions);
      }
  updateAssociationStatus(userId: string, userData: any) : Observable<any>{

   return this.http.put(API_URL + 'associationstatus/${userId}', {userData} , httpOptions);

  }
}
