import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css']
})
export class GpComponent implements OnInit{
  gp() {
    console.log('in gp');
    return 'gp';
  }
  ngOnInit(): void {
    console.log('gp onInit')
  }
}
