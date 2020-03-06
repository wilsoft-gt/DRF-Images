import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PhotoupService {

  private formData: FormData = new FormData();
  
  httpOptions = {
    headers: new Headers({
      'Content-Type': 'multipart/form-data'
    })
  };
  constructor(private http: HttpClient) { }


  submit(image) {
    let data = this.formData.append("image", image)
    this.http.post("http://127.0.0.1:8000/api/v01/photos/", image, {})
  }
}
