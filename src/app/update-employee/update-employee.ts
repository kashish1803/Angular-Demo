import { Component, OnInit } from '@angular/core';
import { ApiServ } from '../api-serv';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit{
  employee = { id: 0, name: '', department: '', salary: null };
  errorMessage = '';

  constructor(private api: ApiServ, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.api.getEmployeeById(id).subscribe(
      res => this.employee = res,
      err => this.errorMessage = 'Failed to load employee data'
    );
  }

  updateEmployee() {
    this.api.updateEmployee(this.employee.id, this.employee).subscribe(
      res => this.router.navigate(['/api']),
      err => this.errorMessage = 'Failed to update employee'
    );
  }
}
