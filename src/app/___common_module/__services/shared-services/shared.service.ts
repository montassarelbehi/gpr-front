import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {

  public matricule: string = null;
  public _SBMisLoading: boolean;
  constructor() { }


}
