import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // str="this is first app";
  // prathusha:boolean=true;
  // show:string=""
  // haeding:string='person Details';
  // show :boolean=true;

//   person:any={
//     name: {
//       first:'harry',
//       surname:'angel'
//     },
//  sex:'m'
//   };
//   isLoggedIn:boolean=false;
//   isNewUser:boolean=false;

// ok:boolean=true;
//   toggle(){
//      this.ok=!this.ok;
//    }
// test(){
//   return 8;
// }
arr:any=[]
 print(){
  for (let index = 0; index <=101 ; index++) {
     this.arr.push(index)
  
}
 }
// clickMe(){
//   this.prathusha=!this.prathusha;
//   this.show="HELLO HYDERABAD"
// }
//   listOfFlowers:any =['rose','lily','sunflower','lotus','juhi']

//   name="";
//   getVal(){
//     let x:number=3;
//     let y:number=8;
//     let z:number=x*y;
//     return z;
//   }
//   isavailable:boolean=true;

//   months:any[]=["January","February","March","April","May","June","July","August","September","October","November","December" ]
//   changemonths(event){
//     console.log(event);
    
//   }
//   color:string="red";
//   show:boolean=true;
 
// value:any='';
// update(value:string)
// {
//   console.log(value);
  
// }

name: string='';
setValue() {this.name='rakesh';}

vehicles: any = {
"car" :
{
  "color":"red",
  "model":"2013"
},
"motorcycle":
{
  "color":"red",
  "model":"2011"
}
}


 keyObject = Object.keys(this.vehicles);

person: any={
  img_url:'./assets/img/image-avatar.png'
};


  person1 = {
	  country: "USA",
	  name: "Rakesh"
  }


  public studentRecord=[
    {studentName:"Rakesh",studentQualification:"MCA", passingYear:"2018"},
    {studentName:"Mukesh",studentQualification:"BCA", passingYear:"2017"},
    {studentName:"Chandra",studentQualification:"B.Tech", passingYear:"2016"},
    {studentName:"Ria",studentQualification:"M.Tech", passingYear:"2014"},
    {studentName:"Deepak",studentQualification:"IIS", passingYear:"2015"}
  
  ];
  public selectDataGot:any=[
    {
      studentName:"",
      studentQualification:"", 
      passingYear:""
    }
  ];
  getStudentRecord(data:any[]){
    //console.log("Get record clicked!!");
    this.selectDataGot = data;
  }
  message:string="this is  velcro";
  


}
