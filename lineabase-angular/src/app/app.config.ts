import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { UserService } from './infraestructure/driven-adapter/user/user.service';
import { EventGateway } from './domain/models/Event/gateway/event-gateway';
import { EventsService } from './infraestructure/driven-adapter/events/events.service';
import { EventDetailGateway } from './domain/models/EventDetail/gateway/eventdetail-gateway';
import { EventdetailService } from './infraestructure/driven-adapter/eventdetail/eventdetail.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    {provide:UserGateway, useClass:UserService},
    {provide:EventGateway, useClass:EventsService},
    {provide:EventDetailGateway, useClass:EventdetailService}
  ]

};
