import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RxjsService} from "../service/rxjs.service";
import {fromEvent, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements AfterViewInit {
  search: string = '';
  @ViewChild('searchInput') searchInput!: ElementRef;
  // change$: Observable<string> | null = null;
  constructor(private rxjsService: RxjsService) {}

  ngAfterViewInit (): void {
    const change$ = fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup');
    change$.pipe(
        map((event: KeyboardEvent) => this.search),
        switchMap((search) => {
          console.log('search string : ', search)
          return this.rxjsService.getProducts(search)
        })
      )
      .subscribe(
      (input) => {
        console.log('products : ')
        console.log(input)
      }
    )
  }
}
