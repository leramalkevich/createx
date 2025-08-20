import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  showPopUp = signal(false);
  constructor() { }
}
