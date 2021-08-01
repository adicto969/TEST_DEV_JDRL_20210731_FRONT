import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchMediaService {

  activeMediaQuery: string;
  onMediaChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.activeMediaQuery = '';
  }

}
