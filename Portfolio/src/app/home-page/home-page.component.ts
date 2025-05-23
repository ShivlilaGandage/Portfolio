import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  contactForm!: FormGroup;
  ngOnInit() {
    this.contactForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  submitContactForm() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:5000/contact', this.contactForm.value).subscribe(
        (res: any) => {
          alert(res.message);
        },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
  }
}
