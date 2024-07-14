import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bikeReg: any;

  validMessage = '';

  models: string[] = [
    '14 Sun Bike',
    'Globo Carbon Fiber Race Series',
    'Master Bike',
    'Bike Pro 2008',
    'Bike Brother model 1212f',
    'Bike 24g',
    'Bike 3030',
    'Bike 1234',
  ];


  bikeForm: FormGroup;

  constructor() {
    this.bikeForm = new FormGroup({

      name: new FormControl('', [Validators.pattern('@([A-Za-z0-9_]{1,15})'), Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("\\+54\\s[0-9]{1,4}\\s15[0-9]{8}")]),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', [Validators.required, Validators.min(100), Validators.max(9999)]),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
  }

  get controles() {
    return this.bikeForm.controls;
  }

  submitRegistration() {
    console.log("el formulario se completo bien ? : " + this.bikeForm.valid);


    console.dir(this.bikeForm);

    if (this.bikeForm.valid) {
      this.validMessage = "Su Garantia Fue Registrada Exitosamente En Nuestro Sistema!";

      console.dir(this.bikeForm.value);
      this.bikeForm.reset();
    } else {
      this.validMessage = "Por Favor Completa El formulario Correctamente";
    }

  }

}
