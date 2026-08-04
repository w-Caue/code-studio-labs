import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Services } from './components/services/services';
import { Wework } from './components/wework/wework';
import { ProjectsComponent } from './components/projects/projects';
import { BecauseWe } from './components/because-we/because-we';
import { Technologies } from './components/technologies/technologies';
import { MyCTA } from './components/my-cta/my-cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Services, Wework, ProjectsComponent, BecauseWe, Technologies, MyCTA, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('code-studio-labs');
}
