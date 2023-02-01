import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

class CustomStructuralContext {
  public somethingToShare = 'hi i am the customStructural Directive'
}
@Directive({
  selector: '[customStructural]'
})
export class CustomStructuralDirective implements OnChanges{
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  @Input('customStructural') param1 = "test";
  @Input('customStructuralParam2') param2 = "";
  context = new CustomStructuralContext();
  ngOnChanges(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);
    console.log(this.param2);
    console.log(this.param1);
  }
}
