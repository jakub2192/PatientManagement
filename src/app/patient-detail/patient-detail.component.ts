import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Patient} from '../patient';


@Component({
  selector: 'app-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patient: Patient = new Patient();
  @Output() setPatient = new EventEmitter<Patient>();
  public imagePath;
  public degrees: string[] = ['Bc.', 'Ing.', 'Mgr.', 'PhD.'];

  constructor() {
  }

  ngOnInit(): void {
  }

  save(patient: Patient): void {
    this.setPatient.emit(patient);
    this.reset();
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported');
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.patient.photo = reader.result.toString();
    };
  }

  reset() {
    this.patient = new Patient();
  }
}
