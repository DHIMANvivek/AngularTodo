import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  students: any[] = [];
  search:any;
  id: number | undefined;
  isEditing: number | null = null;
  constructor(private router: Router) {
    console.log("App Component Loaded...");
    // this.addItem("John", "Doe", "1");
    
  }


  i : any = 0;


 addItem(firstName: string, lastName: string, rollNumber: string) {
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

removeTask(id: number) {
  console.warn("id is ", id);
  this.students = this.students.filter((student) => student.id !== id);
}

editTask(id: any) {
        const student = this.students.find((student) => student.id === id);
        this.isEditing = id;
        console.log("student is ", student)
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
