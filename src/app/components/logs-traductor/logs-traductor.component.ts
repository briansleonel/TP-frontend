import { Component, OnInit } from '@angular/core';
import { Translate } from 'src/app/models/translate';
import { TraductorLogsService } from 'src/app/services/traductor-logs.service';

@Component({
  selector: 'app-logs-traductor',
  templateUrl: './logs-traductor.component.html',
  styleUrls: ['./logs-traductor.component.css']
})
export class LogsTraductorComponent implements OnInit {

  logs: Array<Translate>;
  log: Translate;

  find: Translate;

  constructor(private logsService: TraductorLogsService) { 
    this.cleanFilters();
  }

  viewAllLogs(): void {
    this.logsService.getLogs().subscribe(
      (result) => {
        this.logs = new Array<Translate>();
        result.forEach(element => {
          this.log = this.convert(element);
          this.logs.push(this.log);
        })
      },
      (error) => { console.log(error); }
    )
  }

  viewLogs(): void {
    this.logsService.getLogsFilter(this.find).subscribe(
      (result) => {
        this.logs = new Array<Translate>();
        result.forEach(element => {
          this.log = this.convert(element);
          this.logs.push(this.log);
        })
      },
      (error) => { console.log(error); }
    )
  }

  cleanFilters(): void {
    this.find = new Translate();
    this.find.source = '';
    this.find.target = '';
    this.viewLogs();
  }




  convert(translate): Translate {
    var l = new Translate();
    
    l._id = translate._id;
    l.input = translate.textoOrigen;
    l.source = translate.idiomaOrigen;
    l.result = translate.textoDestino;
    l.target = translate.idiomaDestino;

    return l;
  }

  ngOnInit(): void {
  }

}
