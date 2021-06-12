import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {


  

  constructor(private http : HttpClient) {
  }

  // test(){
  //  return this.http.get('http://localhost/backendEmergentes/public/api/test');
  // }
  interiorLuces(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=interiorLuces');
   }
   exteriorLuces(){
    return this.http.get('http://localhost:1000/?collectionName=exteriorLuces');
   }
   interiorMonoxido(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=interiorMonoxido');

   }

   exteriorTemperatura(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=exteriorTemperatura');

   }
   interiorAlarma(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=interiorAlarma');

   }
   exteriorAlarma(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=exteriorAlarma');

   }
   exteriorLuzSolar(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=exteriorLuzSolar');

   }
   exteriorRiego(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=exteriorRiego');

   }
   interiorHumo(){
    return this.http.get('http://192.241.178.194:10000/?collectionName=interiorHumo');

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
