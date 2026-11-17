import { Component, signal } from '@angular/core';
import { TodoDashboard } from './shared/components/todo-dashboard/todo-dashboard';

@Component({
  imports: [TodoDashboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project_4');
}
