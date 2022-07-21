import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Respuestas } from '../../interfaces/instruments.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta-input',
  templateUrl: './respuesta-input.component.html',
  styleUrls: ['./respuesta-input.component.css']
})
export class RespuestaInputComponent implements OnInit {

  constructor(private qaService: QaService, private router: Router) { }

  ngOnInit(): void {
  }

  resp = new FormGroup ({
    idPre: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required)
  })

  addResp() {
    this.qaService.addResp(this.resp.value as Respuestas)
    this.router.navigate([ '/preguntas' ])
  }
}
