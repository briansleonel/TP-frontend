import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Translate } from 'src/app/models/translate';
import { TraductorLogsService } from 'src/app/services/traductor-logs.service';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css'],
})
export class TraductorComponent implements OnInit {
  translate: Translate;

  constructor(
    private traductorService: TraductorService,
    private traductorLogsService: TraductorLogsService,
    private toastr: ToastrService
  ) {
    this.translate = new Translate('', 'es', 'en');
  }

  translateText(): void {
    if(this.translate.source != this.translate.target){
      this.traductorService.translate(this.translate).subscribe(
        (result) => {
          this.translate.result = result.outputs[0].output;
          this.traductorLogsService
            .addLogs(this.translate)
            .subscribe((res) => console.log(res));
        },
        (error) => {
          this.toastr.error('Ha ocurrido un error')
        }
      );
    } else 
      this.toastr.error('Debe seleccionar idiomas distintos')
      
  }

  clean(): void {
    this.translate = new Translate('es', 'en');
  }

  ngOnInit(): void {}
}
