import {Component, OnDestroy} from '@angular/core';
import {Todo, TodoService} from "../services/todo.service";
import {Observable, Subject, Subscription, takeUntil} from "rxjs";
import {TestService} from "../test/services/test.service";

@Component({
  selector: 'app-test-unsbscribe',
  templateUrl: './test-unsbscribe.component.html',
  styleUrls: ['./test-unsbscribe.component.css']
})
export class TestUnsbscribeComponent implements OnDestroy{
  todos$: Observable<Todo[]>;
  signal$ = new Subject();
  firstTodo$: Observable<Todo>;
  // subscription: Subscription = new Subscription();
  // clickListener: Observable<boolean>;
  nbClick = 0;
  nbUpdates = 0;
  constructor(private todoService: TodoService, private testService: TestService ) {
    this.todos$ = this.todoService.getTodos();
    this.firstTodo$ = this.todoService.getTodo(1);
    this.testService.click$
      .pipe(takeUntil(this.signal$))
      .subscribe(() => this.nbClick ++);
    // this.subscription.add(this.testService.click$.subscribe(() => this.nbClick ++));
    // this.subscription.add(this.testService.update$.subscribe(() => this.nbUpdates ++));
  }
  ngOnDestroy(): void {
    this.signal$.next('i am emiting stop emiting on your side :S');
    this.signal$.complete();
    // this.subscription.unsubscribe();
  }
}
