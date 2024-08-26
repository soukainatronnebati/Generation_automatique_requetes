import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrl: './add-template.component.css'
})
export class AddTemplateComponent implements OnInit{
  templateForm!: FormGroup;
  selectedFile: File | null = null;
  templateTypes: string[] = ['PIDI', 'Mobi', 'Habilitation', 'Référentiel'];


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      typetemp: ['', Validators.required],
      nomDemande: ['', Validators.required],
      requetes: ['', Validators.required]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.templateForm.invalid || !this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('typetemp', this.templateForm.get('typetemp')?.value);
    formData.append('nomDemande', this.templateForm.get('nomDemande')?.value);
    formData.append('requetes', this.templateForm.get('requetes')?.value);
    formData.append('modopFile', this.selectedFile);

    this.http.post('http://localhost:8080/api/template/save', formData).subscribe(
      () => {
        alert('Template ajouté avec succès');
        this.router.navigate(['/template']);
      },
      error => {
        console.error('Erreur lors de l\'ajout du template', error);
      }
    );
  }
}
