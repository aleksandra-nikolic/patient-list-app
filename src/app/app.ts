import { Component, signal } from '@angular/core';
import { Navigation } from './components/navigation/navigation';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app-library');
}
