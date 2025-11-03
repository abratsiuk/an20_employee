import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  // Application title as a signal (zoneless-friendly)
  readonly title = signal('AN Test Project 20');

  // Controls sidenav open/close state
  readonly sidenavOpened = signal(true);

  toggleSidenav(): void {
    this.sidenavOpened.update((opened) => !opened);
  }
}
