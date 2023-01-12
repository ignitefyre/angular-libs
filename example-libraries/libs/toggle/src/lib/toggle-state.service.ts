import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from './services/listener.service';

@Injectable({
  providedIn: 'root'
})
export class ToggleStateService {
  state = new BehaviorSubject<EffectiveState>({ on: false });

  constructor(private listener: ListenerService) {
    // subscribe to signalr and apply state changes via the behavior subject
    
  }

  transform() : void {
    // do the api calls here

    this.onChange({ on: !this.state.getValue().on });
  }

  private onChange(s: EffectiveState) {
    this.state.next(s);
  }
}

export interface EffectiveState {
  on: boolean;
  errors?: EffectiveStateError[]
}

export interface EffectiveStateError {
  message: string;
}
