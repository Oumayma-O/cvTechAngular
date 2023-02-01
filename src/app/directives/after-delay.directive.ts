import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

class CustomStructuralContext {
  public somethingToShare = 'hi i am the customStructural Directive'
}

@Directive({
  selector: '[afterDelay]'
})
export class AfterDelayDirective implements OnInit{
  @Input('afterDelay')
  timer = 0;
  @Input('afterDelayAfter')
  substitute: TemplateRef<any> | null = null;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  context = new CustomStructuralContext();
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    // console.log(this.timer)
    // this.viewContainerRef.
    setTimeout(
      () => {
        this.viewContainerRef.clear();
        if (this.substitute)
          this.viewContainerRef.createEmbeddedView(this.substitute, this.context);
      },
      this.timer
    )
  }
}
