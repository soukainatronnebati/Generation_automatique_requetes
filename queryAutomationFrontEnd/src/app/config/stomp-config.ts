import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const StompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://localhost:8080/ws',

  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,

  reconnectDelay: 200,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
