import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd MMM, yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS,useValue:MY_DATE_FORMATS}
  ]
})
export class SearchComponent {
 minDate = new Date()

}
