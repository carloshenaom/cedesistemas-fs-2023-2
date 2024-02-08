import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  public validationMessages = {
    email: [
      { type: 'pattern', message:'Solo se permiten campos de tipo email'},
      {type:'email', message:'Solo se permiten campos de tipo email'},
      {type:'required', message:'Este campo es requerido'}
    ],
    password: [
      {type:'required', message:'Este campo es requerido'},
      {type: 'pattern', message:'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
      {type:'minLength', message:'Este campo debe tener por lo menos 9 caracteres'}
    ]
  }

  constructor(private router : Router, private formBuilder: FormBuilder, private http: HttpClient, private _userUseCase:Userusecase) {}

  login(){

    if(this.loginForm.valid){
      var user = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      /*
      this.http.post('http://localhost:3000/users/login',{email:user, password}).subscribe(
        (data:any) => {
          if (data.token){
            localStorage.setItem('token', data.token);
            localStorage.setItem('mail',user);
            localStorage.setItem('password',password);
            this.router.navigate(['/home']);
            return;
          }
        },
        (error)=>{
          alert(error.error.message)
          return;
        }
      );
      */
        this._userUseCase.login(user, password).subscribe((data:any) =>{
          if (data){
            localStorage.setItem('token', data.token);
            this.router.navigate(['/home']);
            return;
          }
        })
    } else {
      alert('El formulario no es valido')
      return;
    }
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        email:[
          '',
          [
            Validators.pattern(/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i),
            Validators.email,
            Validators.required
          ]
        ],
        password:[
          '',
          [
            Validators.required,
            Validators.minLength(9),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
          ]
        ]
      }
    )
  }

  public get getControls() {
    return this.loginForm.controls
  }


}
