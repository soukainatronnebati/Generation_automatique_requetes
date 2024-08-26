import { Injectable } from '@angular/core';
import {StompService} from "@stomp/ng2-stompjs";
import {map, Observable, Subject} from "rxjs";
import {Message} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new Subject<string>();

  getNotifications() {
    return this.notifications.asObservable();
  }

  addNotification(message: string) {
    this.notifications.next(message);
  }
}
