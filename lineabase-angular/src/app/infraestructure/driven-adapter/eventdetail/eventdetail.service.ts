import { Injectable } from '@angular/core';
import { GenericService } from '../../helpers/generic.service';
import { EventDetailGateway } from '../../../domain/models/EventDetail/gateway/eventdetail-gateway';
import { Observable } from 'rxjs';
import { EventDetail } from '../../../domain/models/EventDetail/eventdetail';

@Injectable({
  providedIn: 'root'
})
export class EventdetailService extends EventDetailGateway {
  constructor(private genericService:GenericService) {
    super()
  }

  private _url = 'http://localhost:3000'
  getOneEvent(id: string): Observable<EventDetail> {
    return this.genericService.get<EventDetail>(this._url,'events/'+id);
  }


}
