import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  texto: any = 'ola k ase';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleClick() {
    console.log(this.texto);
    this.router.navigate(['another-page'], {state: {example: this.texto}});
  }
}
