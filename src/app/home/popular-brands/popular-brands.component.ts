import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-brands',
  templateUrl: './popular-brands.component.html',
  styleUrls: ['./popular-brands.component.css']
})
export class PopularBrandsComponent {



arrowButtonPressed(index:number){
  console.log("pressed");
  if(index===1){
    const card1 = document.getElementById('main-row1')?.style.setProperty('display','flex')
    const card2 = document.getElementById('main-row2')?.style.setProperty('display','none')
  }
  else{
   
    const card1 = document.getElementById('main-row1')?.style.setProperty('display','none')
    const card2 = document.getElementById('main-row2')?.style.setProperty('display','flex')
    
 
  }
}
}
