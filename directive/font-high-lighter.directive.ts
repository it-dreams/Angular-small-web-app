import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFontHighLighter]'
})
export class FontHighLighterDirective implements OnInit {

  @Input() bgColor:string;
  @Input() cColor:string;

  @Input() appFontHighLighter:string;
  constructor(private el:ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor= this.bgColor;
    this.el.nativeElement.style.color= this.cColor;

    this.el.nativeElement.style.color= this.appFontHighLighter;
  }
}
