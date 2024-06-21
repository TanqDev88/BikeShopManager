import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  validMessage = '';
  //creamos un array con todos los modelso disponibles
  //de bicicletas en al empresa
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
      //validamos con un regExp que el nombre sea un nickName de twitter
      //este debe comenzar con un arroba "@" seguido de maximo 15 caracteres alfanumericos
      name: new FormControl('', [Validators.pattern('@([A-Za-z0-9_]{1,15})'), Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //+54 0 1515124589
      phone: new FormControl('', [Validators.required, Validators.pattern("\\+54\\s[0-9]{1,4}\\s15[0-9]{8}")]),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', [Validators.required, Validators.min(100), Validators.max(9999)]),
      //Tarea agregar una regExp que permita solamente ingresar
      //el formato de fecha 11/12/2020 o 30-12-2020
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
  }

  //creamos un getter para que nos sea mas comodo y prolijo acceder a cada
  // uno de los formControls desde el template (home.componenthtml)
  get controles() {
    return this.bikeForm.controls;
  }

  submitRegistration() {
    console.log("el formulario se completo bien ? : " + this.bikeForm.valid);

    //veamos que tenmos dentro de un objeto FormGorup
    console.dir(this.bikeForm);

    if (this.bikeForm.valid) {
      this.validMessage = "Su Garantia Fue Registrada Exitosamente En Nuestro Sistema!";

      //tomamos todos los datos que fueron ingresados en el form y los enviamos serializados
      //en un JSON
      console.dir(this.bikeForm.value);
      //refresco todas las entradas del formulario
      this.bikeForm.reset();
    } else {
      this.validMessage = "Por Favor Completa El formulario Correctamente";
    }

  }

}
