import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  userId!: number;
  editUserForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.loadUser();

    this.editUserForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loadUser() {
    this.userService.getUserById(this.userId).subscribe(
      (user) => {
        this.editUserForm.patchValue(user);
      },
      (error) => {
        console.error('Erreur lors du chargement de l\'utilisateur', error);
      }
    );
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(
        (response) => {
          this.router.navigate(['/utilisateur']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/utilisateur']);
  }

}
