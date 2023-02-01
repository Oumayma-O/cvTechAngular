import {Directive, HostBinding, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

class NgRepeatContext {
  // constructor(i = 0) {}
  public index = 0;
  public odd = true;
  public even = false;
  public first =  true;
  public last = false;
}

@Directive({
  selector: '[ngRepeat]'
})
export class RepeatDirective implements OnChanges{
  @Input('ngRepeat')
  iteration = 0;
  constructor(
    private template: TemplateRef<NgRepeatContext>,
    private container: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();
    for (let i = 0; i < this.iteration; i++) {
      const context = new NgRepeatContext();
      if (i != 0) {
        context.first = false;
      }
      if (i == this.iteration - 1) {
        context.last = true;
      }
      context.index = i;
      context.odd = !! (i % 2);
      context.even = !(i % 2);
      this.container.createEmbeddedView(this.template, context);
    }
  }
  static ngTemplateContextGuard() {}
}
