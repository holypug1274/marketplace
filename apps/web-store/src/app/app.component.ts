import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@marketplace/web-store/ui/header';
import { FooterComponent } from '@marketplace/web-store/ui/footer';
import { AppFacadeService } from './app.facade.service';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  providers: [AppFacadeService],
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public facadeService: AppFacadeService = inject(AppFacadeService)

  public homeClicked(): void {
    this.facadeService.homeClicked()
  }

  public basketClicked(): void {
    this.facadeService.basketClicked()
  }
}
