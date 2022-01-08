import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http: HttpClient
    ) { }

  addLocation(data){
    return this.http.post('http://localhost:90/backend/create.php', data);

  }

  getAllLocations(){
    return this.http.get('http://localhost:90/backend/read.php');

  }

  deleteLugar(data){
    return this.http.post('http://localhost:90/backend/delete.php', data);
  }
}
