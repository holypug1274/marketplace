import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessVM } from '@marketplace/web-store/data-access/types';
import { Observable } from 'rxjs';
import { SuccessFacadeService } from './success.facade.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'marketplace-success',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  public facadeService: SuccessFacadeService = inject(SuccessFacadeService)

  public vm$: Observable<SuccessVM> = this.facadeService.getVm();

  public onGoHomeClicked(): void {
    this.facadeService.onGoHomeClicked()
  }
}
