import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  whiteBg = signal(false);
  constructor() { }

}
