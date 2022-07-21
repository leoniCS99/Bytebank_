import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/models/trasferencia.model';
import { TrasferenciaService } from '../services/trasferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  trasferencias: any[] = [];

  constructor(private service: TrasferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((trasferencias: Transferencia[]) => {
      console.table(trasferencias);
      this.trasferencias = trasferencias;
    })
  }
}
