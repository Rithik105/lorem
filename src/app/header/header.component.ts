import { Component, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnChanges{
  @Input("fixed") fixed:number=1

 ngOnChanges(): void {
  if(this.fixed<100){
  const headerIcon = document.getElementById('header-cart-icon')?.style.setProperty("background-color",`rgba(253,165,163,${this.fixed})`)
  const headerText = document.getElementById('header-cart')?.style.setProperty("color",`rgba(${255-(this.fixed/100)+1},${255-this.fixed-90},${255-this.fixed-92},1)`)
  }
 }

 languages : string[] = ['English','Kannada','Hindi'];
  selectedLanguage : string = "English"

}
