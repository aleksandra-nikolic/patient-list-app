import { Component, input, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { DUMMY_PATIENTS } from '../../data/dummy-patients';
import { Patient } from '../../models/patient';
import { ButtonModule } from 'primeng/button';
import { PatientsList } from '../patients-list/patients-list';
import { AddPatient } from '../add-patient/add-patient';

@Component({
  selector: 'app-navigation',
  imports: [TabsModule, TableModule, ButtonModule, PatientsList, AddPatient],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation implements OnInit {
  patientListTab = '0';
  patients: Patient[] = [];

  ngOnInit() {
    const data = localStorage.getItem('patients');
    if (data) {
      this.patients = JSON.parse(data);
    } else {
      this.patients = DUMMY_PATIENTS;
      localStorage.setItem('patients', JSON.stringify(DUMMY_PATIENTS));
    }
  }
  onPatientAdded(patient: Patient) {
    this.patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(this.patients));
    this.patientListTab = '0';
  }
  onPatientsChanged(patients: Patient[]) {
    this.patients = patients;
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }
}
