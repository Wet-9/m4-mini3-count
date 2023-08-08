import { Injectable } from '@angular/core';
import { myPatient } from './patient-data';

@Injectable({
  providedIn: 'root'
})
export class PatientCountService {

  constructor() { }
  getPatientCount(): number {
    return myPatient.length;
  }
}

