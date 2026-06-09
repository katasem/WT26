import { Component } from '@angular/core';
import { Left } from './left/left';
import { Right } from './right/right';
import { Memberservice } from '../shared/memberservice';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 title: string = "Hallo FIW!";
 isDisabled = false;
 bildQuelle1 ="https://www.htw-berlin.de/files/Presse/_tmp_/4/6/csm_HTW-Berlin-TA-Herbst-2013_06-HTW_Berlin-Alexander_Rentsch_5b4d7f9443.jpg"
bildQuelle2 = "https://www.htw-berlin.de/files/Presse/_tmp_/7/e/csm_HTW-Berlin-WH-Turm-DSC219613-HTW_Berlin-Alexander_Rentsch_dd963596db.jpg"
bildQuelle = this.bildQuelle1; //müssen this. auf die Objekten cklasse zugreifen
wh = true;
groesse = 100;
buttonname = "Wilheminenhof"
private myservice = inject(Memberservice)

//bei der Funktion muss ich function nicht schreiben
changeImg(): void {
  if(this.wh) {
    this.bildQuelle = this.bildQuelle2;
    this.wh = false;
    this.buttonname = "Treskowallee"
  }
  else {
    this.bildQuelle = this.bildQuelle1;
    this.wh = true;
    this.buttonname = "Wilheminenhof"
  }
}


smaller() {
  if(this.groesse > 100) this.groesse /= 2;
}

bigger() {
 if(this.groesse < 100) this.groesse *= 2;
}
}