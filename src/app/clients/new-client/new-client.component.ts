import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientFormComponent } from "../components/client-form/client-form.component";

@Component({
    selector: 'app-new-client',
    imports: [ClientFormComponent],
    templateUrl: './new-client.component.html',
    styleUrl: './new-client.component.scss',
    providers: [
    {
      provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService
    }
    ]
})
export class NewClientComponent {

  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService) {

  }

}
