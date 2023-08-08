import { Injectable } from '@angular/core';
import { myDoctor } from './doctor-data';
@Injectable({
  providedIn: 'root'
})
export class DoctorCountService {

  constructor() { }
  getDoctorCount(): number {
    return myDoctor.length;
  }
}
