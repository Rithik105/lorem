import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fixed:number=0
@HostListener('window:scroll',['$event']) onScroll(){

    
  const header = document.getElementById('home-header-fixed')
  this.fixed=(window.scrollY-300);
  header?.style.setProperty("background-color",`rgba(255,255,255,${(window.scrollY-300)/100})`)
  
}
}
