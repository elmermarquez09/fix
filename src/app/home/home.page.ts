import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  id: any;
  date: any;
  name: any;
  physician: any;
  discharge: any;
  care: any;
  services: any;
  staffs: any;
  time: any;
  regularly: any;
  spaces	: any;
  medicalstaffs: any;
  andcare: any;
  room: any;
  received	: any;
  thestaff: any;
  laboratoryroom: any;
  others: any;
  hospital: any;
  us	: any;
  students: any = [];


  constructor(public _apiService: ApiService) {}

  //Function for creating student record
  addStudent() {
    //console.log(this.student_number, this.student_name, this.email);
    let data = {
      date: this.date,
      name: this.name,
      physician: this.physician,
      discharge: this.discharge,
      care: this.care,
      services: this.services,
      staffs: this.staffs,
      time: this.time,
      regularly: this.regularly,
      spaces: this.spaces,
      medicalstaffs: this.medicalstaffs,
      andcare: this.andcare,
      room: this.room,
      received: this.received,
      thestaff: this.thestaff,
      laboratoryroom: this.laboratoryroom,
      others: this.others,
      hospital: this.hospital,
      us: this.us
    }

    this._apiService.addStudent(data).subscribe((res: any) => {
      console.log("Success == ", res)
      this.date = '';
      this.name = '';
      this.physician = '';
      this.discharge = '';
      this.care = '';
      this.services = '';
      this.staffs = '';
      this.time = '';
      this.regularly = '';
      this.spaces = '';
      this.medicalstaffs = '';
      this.andcare = '';
      this.room = '';
      this.received = '';
      this.thestaff = '';
      this.laboratoryroom = '';
      this.others = '';
      this.hospital = '';
      this.us = '';
      alert("SUCCESS");
    }, (error: any) => {
      alert("ERROR")
      console.log("Error = ", error)
    });
  }

  //Function to retrieve students

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) =>{
      console.log("SUCCESS == ", res);
      this.students =res;
    },(error:any) => {
      console.log("ERROR == ", error);
    })
  }

  deleteStudent(id){
    let text;
    if (confirm("Are you sure about that?") == true) {
      text = "Deleted Successfully !";
    } else {
      text = "Delete canceled!";
    } alert(text);
      this._apiService.deleteStudent(id).subscribe((res:any)=>{
        console.log("Delete Success == ", res);
        this.students = res;
      },(error:any)=>{
        console.log("Delete Error == ", error);
      })
    }

}