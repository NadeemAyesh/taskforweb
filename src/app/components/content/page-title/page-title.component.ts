import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() header: string; // decorate the property with @Input()
  @Input() paragraph: string; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
    console.log(this.header)
    console.log(this.paragraph)
  }

}
