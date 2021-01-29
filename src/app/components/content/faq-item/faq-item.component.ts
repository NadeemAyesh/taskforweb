import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {

  @Input() itemId: string;
  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
