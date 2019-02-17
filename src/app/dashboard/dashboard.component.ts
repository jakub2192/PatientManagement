import {Component, OnInit} from '@angular/core';
import {Patient} from '../patient';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patient: Patient;
  isCreating: boolean;

  patients: Patient[] = [
    {name: 'Jakub', surname: 'Chorlavy', address: 'Kosicka 1, Kosice', degree: undefined, photo: 'assets/img/images.jpg'},
    {name: 'Milan', surname: 'Zdravy', address: 'Kosicka 1, Kosice', degree: 'Ing.'},
    {name: 'Daniel', surname: 'Bacil', address: 'Presovska 10, Presov', degree: 'Bc.'},
    {name: 'Jozko', surname: 'Novak', address: 'Bratislavska 54, Bratislava'},
    {name: 'Dominika', surname: 'Bojazliva', address: 'Zilinska 5, Zilina', degree: 'Mgr.'}
  ];

  constructor() {
  }

  ngOnInit() {
  }


  setCreating() {
    this.isCreating = true;
    this.patient = null;
  }

  openPatientDetail(patient: Patient) {
    this.patient = patient;
    this.isCreating = false;
  }

  goBack() {
    this.patient = null;
    this.isCreating = false;
  }

  savePatient(patient: Patient) {
    this.patients.push(patient);
  }
}
