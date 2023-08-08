import { Injectable } from '@angular/core';
import { PatientCountService } from './patient-count.service';
import { DoctorCountService } from './doctor-count.service';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  constructor(
    private patientCountService: PatientCountService,
    private doctorCountService: DoctorCountService
  ) {}

  getTotal(): number {
    const totalPatients = this.patientCountService.getPatientCount();
    const totalDoctors = this.doctorCountService.getDoctorCount();
    return totalPatients + totalDoctors;
  }
}