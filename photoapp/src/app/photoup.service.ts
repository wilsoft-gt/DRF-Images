import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoupService {

  private formData: FormData = new FormData();
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'image/*',
      'Authorization': 'my-auth-token'
    })
  }
  constructor(private http: HttpClient) { }

  submit(fData): Observable<any> {
    return this.http.post<any>("http://127.0.0.1:8000/api/v01/photos/", fData)
  }

  getImages(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/v01/photos/") 
  }

  deleteImage(id): Observable<any> {
    console.log("dELETING: "+id)
    return this.http.delete("http://127.0.0.1:8000/api/v01/photos/"+id+"/")
  }

}
