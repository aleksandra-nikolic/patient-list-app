import { Component, input } from '@angular/core';
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
export class Navigation {
  patients: Patient[] = DUMMY_PATIENTS;
}
