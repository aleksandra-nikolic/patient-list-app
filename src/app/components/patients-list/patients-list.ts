import { Component } from '@angular/core';

import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { DUMMY_PATIENTS } from '../../data/dummy-patients';
import { Patient } from '../../models/patient';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-patients-list',
  imports: [
    TabsModule,
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DialogModule,
    FormsModule,
  ],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css',
})
export class PatientsList {
  @Input() patients: Patient[] = [];

  editDialogVisible = false;
  selectedPatient: Patient | null = null;
  editIndex: number | undefined;
  searchText: string = '';

  openEdit(patient: Patient, index: number) {
    this.selectedPatient = { ...patient };
    this.editDialogVisible = true;
    this.editIndex = index;
  }

  cancelEdit() {
    this.editDialogVisible = false;
    this.selectedPatient = null;
  }

  saveEdit() {
    if (!this.selectedPatient || this.editIndex === undefined) return;

    this.patients[this.editIndex] = this.selectedPatient;
    this.editDialogVisible = false;
    this.selectedPatient = null;
    this.editIndex = undefined;
  }

  deletePatient(patient: Patient) {
    const index = this.patients.findIndex((p) => p.id === patient.id);
    this.patients.splice(index, 1);
  }

  get filteredPatients(): Patient[] {
    if (!this.searchText) return this.patients;

    return this.patients.filter(
      (p) =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.age.toString().includes(this.searchText) ||
        p.diagnosis.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }
}
