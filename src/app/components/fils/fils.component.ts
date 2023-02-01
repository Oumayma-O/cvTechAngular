import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit{
  title = '';
  fils() {
    console.log('in fils');
    return 'fils';
  }
  ngOnInit(): void {
    console.log('fils onInit')
  }
}
