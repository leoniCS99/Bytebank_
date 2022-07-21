import { TrasferenciaService } from './../services/trasferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../services/models/trasferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-trasferencia',
  templateUrl: './nova-trasferencia.component.html',
  styleUrls: ['./nova-trasferencia.component.scss'],
})
export class NovaTrasferenciaComponent implements OnInit {
  @Output() aoTrasferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TrasferenciaService, private router: Router) {}

  ngOnInit(): void {}

  trasferir(): void {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    console.log('Valor Emitri', valorEmitir);

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log('Resultado' , resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')

    },
    (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
