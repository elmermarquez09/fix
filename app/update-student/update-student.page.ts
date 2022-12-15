import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router, private _apiService: ApiService) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any)=>{
    console.log("SUCCESS", res);
    let student = res[0];
    this.date = student.date;
    this.name = student.name;
    this.physician = student.physician;
    this.discharge = student.discharge;
    this.care = student.care;
    this.services = student.services;
    this.staffs = student.staffs;
    this.time = student.time;
    this.regularly = student.regularly;
    this.spaces = student.spaces;
    this.medicalstaffs = student.medicalstaffs;
    this.andcare = student.andcare;
    this.room = student.room;
    this.received = student.received;
    this.thestaff = student.thestaff;
    this.laboratoryroom = student.laboratoryroom;
    this.others = student.others;
    this.hospital = student.hospital;
    this.us = student.us;

  }, (err: any) =>{
    console.log("ERROR", err);
  })

}

updateStudent(){
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
  this._apiService.updateStudent(this.id,data).subscribe((res:any) =>{
    console.log("SUCCESS", res);
    alert("SUCCESS");
    this.router.navigateByUrl('/home');
  }, (err:any) => {
    console.log("ERROR", err);
  })
}


}

