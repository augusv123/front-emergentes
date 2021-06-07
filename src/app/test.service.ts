import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {


  

  constructor(private http : HttpClient) {
  }

  test(){
   return this.http.get('http://localhost/backendEmergentes/public/api/test');
  }
  interiorLuces(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=interiorLuces');
   }

 



  // public function for sending and publishing mqtt messages

  // public sendMessage() {
  //   console.log('sendMessage')
  //   this._mqttService.sendMessage("/myFirstDatabase?retryWrites=true&w=majority", MESSAGE);
  // }

  // public publishMessage() {
  //   console.log('publishMessage')
  //   this._mqttService.publishMessage(TOPIC, MESSAGE);
  // }


}
