import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';
import { UserResponse } from '../../../domain/models/User/user-response';
import { User } from '../../../domain/models/User/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  public validationMessages = {
    name: [
      {type:'required', message:'Este campo es requerido'},
      {type:'minlength', message:'Este campo debe tener por lo menos 3 caracteres'}
    ],
    phone: [
      {type:'required', message:'Este campo es requerido'},
      {type:'minlength', message:'Este campo debe tener por lo menos 3 caracteres'}
    ],
    email: [
      {type: 'pattern', message:'Solo se permiten campos de tipo email'},
      {type:'email', message:'Solo se permiten campos de tipo email'},
      {type:'required', message:'Este campo es requerido'}
    ],
    password: [
      {type: 'required', message:'Este campo es requerido'},
      {type: 'pattern', message:'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
      {type: 'minlength', message:'Este campo debe tener por lo menos 9 caracteres'}
    ],
    identify: [
      {type: 'required', message:'Este campo es requerido'},
      {type: 'pattern', message:'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
      {type: 'minlength', message:'Este campo debe tener por lo menos 9 caracteres'}
    ]
  }

  constructor(private router : Router, private formBuilder: FormBuilder, private http: HttpClient, private _userUserCase:Userusecase) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name:[
          '',
          [
            Validators.minLength(3),
            Validators.required
          ]
        ],
        phone:[
          '',
          [
            Validators.minLength(3),
            Validators.required
          ]
        ],
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
        ],
        identify:[
          '',
          [
            Validators.required,
           //Validators.minLength(9),
            //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
          ]
        ]
      }
    )

  }
  public get getControls() {
    return this.registerForm.controls
  }

  register(){

    if (this.registerForm.valid){
      var user:User = {
        name: this.registerForm.controls['name'].value,
        phone: this.registerForm.controls['phone'].value,
        email: this.registerForm.controls['email'].value,
        identify:this.registerForm.controls['identify'].value,
        password: this.registerForm.controls['password'].value
      }

      this._userUserCase.signup(user).subscribe(
        (data : UserResponse) =>{
          if (data){
            alert(`el usuario ${data.user.name} fue creado con éxito`);
            this.router.navigate(['/fullscreen/login']);
            return;
          }
        }
      )

    }


    // this.http.post('http://localhost:3000/users/signup', {email:user, password, name:nombres, phone}).subscribe(
    //   (data:any) => {
    //     if(data){
    //       alert(`el usuario ${nombres} fue creado con éxito`);
    //       this.router.navigate(['/fullscreen/login']);
    //       return;
    //     }
    //   },
    //   (error)=>{
    //     alert(error.error.message)
    //       return;
    //   }
    // );

  }

}
