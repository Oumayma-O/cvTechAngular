import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  ngOnInit(): void {
    console.log('Parent onInit')
  }

  parent() {
    console.log('in parent');
    return 'parent';
  }
}
