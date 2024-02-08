import { Injectable } from "@angular/core";
import { EventGateway } from "../models/Event/gateway/event-gateway";
import { Observable } from "rxjs";
import { Event } from "../models/Event/event";

@Injectable({
  providedIn:'root'
})

export class Eventusecase {
  constructor(private _eventGateway:EventGateway){}

  //aca va toda la logica relacionada con los eventos

  getAllEvents(category:string):any{
    var eventsWithLastUpdate: Event[] = []
    this._eventGateway.getAllEvents(category).subscribe((data:any) => {
      if (data){
        data.events.forEach((event:Event) =>{
          var date = new Date();
          var updatedAt = new Date(event.updatedAt);
          var dateDifferenceMillisecons = date.getTime() - updatedAt.getTime()
          event.lastUpdate = Math.floor(dateDifferenceMillisecons/(1000*60));
          eventsWithLastUpdate.push(event);
        });
      }
    })
    return eventsWithLastUpdate;
  }
}
