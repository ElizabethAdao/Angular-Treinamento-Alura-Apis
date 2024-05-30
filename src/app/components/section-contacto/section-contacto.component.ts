import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contacto',
  templateUrl: './section-contacto.component.html',
  styleUrls: ['./section-contacto.component.css']
})
export class SectionContactoComponent implements OnInit {
  @Input() nome: string = '';
  @Input() telefone: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
