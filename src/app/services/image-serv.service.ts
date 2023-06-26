import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServService {

  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  uploadImages(images: File[]): Promise<string> {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    return this.http.post<any>(`${this.apiUrl}/image/`, formData)
      .toPromise()
      .then((response)=> response.imageUrls ).finally(() => {

        console.info('done');
       }).catch((err) => {  console.error(err); })
     ;
  }

}
