import { Component } from '@angular/core';
import { ApiServ } from '../api-serv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
  newEmployee = { name: '', department: '', salary: null };
  errorMessage = '';

  constructor(private api: ApiServ, private router: Router) {}

  addEmployee() {
    this.api.addEmployee(this.newEmployee).subscribe(
      response => {
        console.log('Employee added:', response);
        // navigate back to home or list page
        this.router.navigate(['/api']);
      },
      error => {
        console.log(error);
        this.errorMessage = 'Failed to add employee';
      }
    );
  }
}
