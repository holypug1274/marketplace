import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@marketplace/web-store/ui/header';
import { FooterComponent } from '@marketplace/web-store/ui/footer';
import { HomeFacadeService } from './app.facade.service';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  providers: [HomeFacadeService],
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public facadeService: HomeFacadeService = inject(HomeFacadeService)

  public homeButtonClicked(): void {
    this.facadeService.homeButtonClicked()
  }

  public basketButtonClicked(): void {
    this.facadeService.basketButtonClicked()
  }
}
