import { Component } from '@angular/core';
import { myDoctor } from '../doctor-data';
import { myPatient } from '../patient-data';
import { TotalService } from '../total-count.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
  hospitalDoctors = myDoctor;
  hospitalPatients = myPatient;
  totalCount: number;
  constructor(totalCountService: TotalService) {
    this.totalCount = totalCountService.getTotal();
}
}

