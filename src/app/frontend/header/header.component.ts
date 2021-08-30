import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cate:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  showCate(){
    this.cate = !this.cate
  }

}
