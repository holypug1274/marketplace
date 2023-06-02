import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerService } from '@marketplace/web-store/utils';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'marketplace-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public spinnerService: SpinnerService = inject(SpinnerService)

  @Output()
  public homeButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public basketButtonClicked: EventEmitter<void> = new EventEmitter<void>();
}
