import { NgModule,Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-builtins',
  templateUrl: './builtin-pipes-component.component.html',
  styleUrls: ['./builtin-pipes-component.component.css']
})
export class BuiltinPipesComponentComponent implements OnInit {

  private dateVal: Date = new Date();
  private jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

  constructor() { }

  ngOnInit() {
  }

}
