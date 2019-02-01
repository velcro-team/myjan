import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input() teja:string;
@Output()myData=new EventEmitter();
  @Input() studentData:any[];
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();
onSubmit(){
  this.myData.emit("this is output data from child");
}

  emitStudentEvent(i){
    let studentSelected={
      stuNameSel: this.studentData
    }
    //alert("clicked!"+i);
    //console.log("data=>",studentSelected.stuNameSel[i]);
this.sendRecord.emit(studentSelected.stuNameSel[i]);
  }

  ngOnInit() {
  }

}
