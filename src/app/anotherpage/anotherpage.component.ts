import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anotherpage',
  templateUrl: './anotherpage.component.html',
  styleUrls: ['./anotherpage.component.scss']
})
export class AnotherpageComponent implements OnInit {
  received: any;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.received = this.router.getCurrentNavigation().extras.state.example;
    }
  }
  ngOnInit() {
  }

}
