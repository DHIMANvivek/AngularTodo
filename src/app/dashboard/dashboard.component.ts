import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'todo';
  students: any[] = [];
  search:any;
  id: number | undefined;
  isEditing: number | null = null;
  constructor(private sharedService: SharedService, private router: Router) {
    console.log("App Component Loaded...");
  }

  registeredEmail = this.sharedService.getRegisteredEmail();
 

   
 addItem(firstName: string, lastName: string, rollNumber: string) {
   if (!this.registeredEmail) {
      alert("User is not registered. Redirecting to register...");
      this.router.navigateByUrl('sign-up'); // Redirect to login page
          return;
}else {

      const studentExists = this.students.some((student) => student.rollNumber === rollNumber);

    if (studentExists) {
      alert("Student with the same Roll Number already exists.");
      return; // Don't add the student if it already exists
    }

console.warn(firstName);
    if (firstName.trim() !== '' && lastName.trim() !== '' && rollNumber.trim() !== '') {
      const student = {
        id: this.students.length,
        firstName: firstName,
        lastName: lastName,
        rollNumber: rollNumber
      };
      this.students.push(student);
      console.warn("button is ", this.students);
    }
}

 }

removeTask(id: number) {
  console.warn("id is ", id);
  this.students = this.students.filter((student) => student.id !== id);
}

editTask(id: any) {
        const student = this.students.find((student) => student.id === id);
        this.isEditing = id;
        console.log("student is ", student)

        // if(student) {
        //   const firstName = prompt("Enter First Name", student.firstName);
        //   const lastName = prompt("Enter Last Name", student.lastName);
        //   const rollNumber = prompt("Enter Roll Number", student.rollNumber);

        //   if(firstName && lastName && rollNumber) {
        //     student.firstName = firstName;
        //     student.lastName = lastName;
        //     student.rollNumber = rollNumber;
        //   }
        // }

  // console.warn(student);
  // var firstName = this.students[id].firstName;
  // var lastName = this.students[id].lastName;
  // var rollNumber = this.students[id].rollNumber;
  // console.warn(firstName , lastName , rollNumber);
  // this.students.push(firstName, lastName, rollNumber);
}

updateTask(id: number, firstName: string, lastName: string, rollNumber: string) {
    const student = this.students.find((student) => student.id === id);
    if (student) {
      // Update the student data in the array
      student.firstName = firstName;
      student.lastName = lastName;
      student.rollNumber = rollNumber;
    }
    this.isEditing = null; // Reset the editing state
  }


}