import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LatestSearchService {

  latestSearchTitle: string[] = [];
  constructor() { }
}
