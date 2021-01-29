import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
