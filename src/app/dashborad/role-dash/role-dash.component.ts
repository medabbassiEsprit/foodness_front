import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/data/role.service';
import role from 'src/app/model/role';

@Component({
  selector: 'app-role-dash',
  templateUrl: './role-dash.component.html',
  styleUrls: ['./role-dash.component.css']
})
export class RoleDashComponent implements OnInit {
  roles !: role[];

  form: any = {
    name: null,
  };

  constructor(private roleService:RoleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.roleService.getAllRoles()
    .subscribe(
      (data: role[] )=> {
        this.roles = data;
        console.log(this.roles);
      },
      error => {
        console.error('Failed to get all roles:', error);
      }
    );
  }

  onDeleteUser(role: role) {
    this.roleService.deleteRole(role._id)
      .subscribe(
        () => {
          // Success
          console.log('User deleted successfully.');
          this.roles = this.roles.filter(u => u._id !== role._id);
        },
        error => {
          // Error
          console.error('Failed to delete user:', error);
        }
      );
  }
  onSubmit(): void {

    const { name } = this.form;

    this.roleService.createRole(name).subscribe(
      {
        next: data =>

         {
          console.log(data);
          window.location.reload();

        },
        error: err => {
          console.log(err)
        }

      });
}

onDeleteRole(role: role) {
  this.roleService.deleteRole(role._id)
    .subscribe(
      () => {
        // Success
        console.log('User deleted successfully.');
        this.roles = this.roles.filter(u => u._id !== role._id);
      },
      error => {
        // Error
        console.error('Failed to delete user:', error);
      }
    );
}
}


