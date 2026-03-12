import { Patient } from '../models/patient';

export const DUMMY_PATIENTS: Patient[] = [
  { id: 1, name: 'Ana Petrović', age: 32, diagnosis: 'Flu' },
  {
    id: 2,
    name: 'Marko Jovanović',
    age: 45,
    diagnosis: 'Diabetes',
  },
  { id: 3, name: 'Ivana Nikolić', age: 28, diagnosis: 'Allergy' },
];
