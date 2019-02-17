import {Injectable} from '@angular/core';

import {Observable, Subscriber} from 'rxjs';


import {MessageService} from './message.service';
import {Patient} from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  currentPatient: Subscriber<Patient>;

  constructor() {
  }

  currentPatientSubs(): Observable<Patient> {
    return new Observable<Patient>(patient => {
      this.currentPatient = patient;
      patient.next();
    });
  }
}
