import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-attribute',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './static-attribute.component.html',
  styleUrl: './static-attribute.component.css'
})
export class StaticAttributeComponent implements OnInit {
  static counter : number = 0;
  static arrRtv : string[] = [];

  ngOnInit(): void {
    if(StaticAttributeComponent.arrRtv.length == 0){
      console.log("Adding items...");
      StaticAttributeComponent.arrRtv.push("item1");
      StaticAttributeComponent.arrRtv.push("item2");
      StaticAttributeComponent.arrRtv.push("item3");
    }
    else
    {
      console.log("Items already added!!!");
    }
  }

  addCounter():void {
    StaticAttributeComponent.counter += 1;
  }

  clearCounter():void {
    StaticAttributeComponent.counter = 0;
  }

  get Counter() : number {
    return StaticAttributeComponent.counter;
  }

  get Items() : string[] {
    return StaticAttributeComponent.arrRtv;
  }
}
