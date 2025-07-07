import { Component, OnInit } from '@angular/core';
import { ApiServ } from '../api-serv';

@Component({
  selector: 'app-api-integration',
  standalone: false,
  templateUrl: './api-integration.html',
  styleUrl: './api-integration.css'
})
export class ApiIntegration implements OnInit {
  constructor(private api: ApiServ) {}

  idToUpdate: number | null = null;
  idToDelete: number | null = null;
  idToSearch: number = 0;
  allEmps: any = [];
  errorMessage = "";

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  // Method to load all employees
  loadAllEmployees() {
    this.api.getAllMyEmployee().subscribe(
      response => {
        console.log('All employees:', response);
        this.allEmps = response;
      },
      error => {
        console.log(error);
        this.errorMessage = 'Failed to load employees';
      }
    );
  }

  // Find employee by ID
  findEmployeeById(id: any) {
    this.api.getEmployeeById(id).subscribe(
      (response) => {
        if (response && response.id) {
          this.allEmps = [response];
          this.errorMessage = '';
        } else {
          this.allEmps = [];
          this.errorMessage = 'No employee found on this ID';
        }
      },
      (error) => {
        console.log(error);
        this.allEmps = [];
        this.errorMessage = 'No employee found on this ID';
      }
    );
  }

  // Delete employee by ID
  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.api.deleteEmployee(id).subscribe(
        res => {
          console.log('Deleted:', res);
          this.errorMessage = '';
          this.idToDelete = null; // clear input after delete
          this.loadAllEmployees(); // refresh full list
        },
        err => {
          console.log(err);
          this.errorMessage = err.error || 'Failed to delete employee';
        }
      );
    }
  }
}
