import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  temperature = 24
  currentTemparature = 19

  ultimasdiez 
  constructor(private testService : TestService) {}
  ngOnInit(): void {
    this.ultimasdiez = JSON.parse(this.getData2())
    console.log(this.ultimasdiez)
  }

  getData(){
    this.testService.interiorLuces().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )

  }
  
  getData2(){
    return '[{"datetime":"29/05/2021 23:26:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:25:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:24:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:23:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:22:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:21:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:20:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:19:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:18:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:17:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"}]';
  }
}
