import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Geo-Global Client';
  clients: any[];
  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((data) => this.clients = data);
  }
}
