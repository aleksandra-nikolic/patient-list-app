import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/patient';
import { ButtonModule } from 'primeng/button';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css',
})
export class AddPatient {
  @Input() patients: Patient[] = [];
  newPatient: Patient = {
    id: 0,
    name: '',
    age: null as any,
    diagnosis: '',
  };

  saveNewPatient() {
    const maxId = this.patients.length > 0 ? Math.max(...this.patients.map((p) => p.id)) : 0;

    const patientToAdd = { ...this.newPatient, id: maxId + 1 };
    this.patients.push(patientToAdd);

    this.newPatient = { id: 0, name: '', age: null as any, diagnosis: '' };
  }
}
